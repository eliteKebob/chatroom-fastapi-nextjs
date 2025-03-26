import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    subscribeToMessages: builder.query<string, void>({
      queryFn: () => ({ data: "" }),
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        const ws = new WebSocket(process.env.WS_URL!);

        try {
          await cacheDataLoaded;

          ws.onmessage = (event) => {
            console.log("Event:", event);
            updateCachedData((draft) => {
              draft = event.data;
              return draft;
            });
          };

          await cacheEntryRemoved;
          ws.close();
        } catch (error) {
          console.error("WebSocket error:", error);
        }
      },
    }),
  }),
});

export const { useSubscribeToMessagesQuery } = api;
