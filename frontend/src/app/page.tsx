import WebSocketDisplay from "@/components/ws";
import "./page.scss";
import SendMessageForm from "@/components/msg";

export default function Home() {
  return (
    <div className="homepage">
      <div className="chat">
        <div className="messages">
          <WebSocketDisplay />
        </div>
        <div className="send">
          <SendMessageForm />
        </div>
      </div>
    </div>
  );
}
