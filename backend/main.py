from typing import List
from fastapi import FastAPI, WebSocket

app = FastAPI()

clients: List[WebSocket] = []


@app.get("/")
async def get():
    return {"hello": "world"}


@app.websocket("/")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    clients.append(websocket)

    try:
        while True:
            data = await websocket.receive_text()
            for client in clients:
                await client.send_text(f"New message: {data}")
    except Exception as e:
        print(e)
        clients.remove(websocket)
