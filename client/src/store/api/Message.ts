import APIS_ROOT from '@/constants/APIS_ROOT';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const messageApi = createApi({
  reducerPath: 'messageApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${APIS_ROOT}/message`,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: (receiverId: string) => `/${receiverId}`,
    }),
    sendMessage: builder.mutation({
      query: ({
        receiverId,
        message,
      }: {
        receiverId: string;
        message: string;
      }) => ({
        url: '/send',
        method: 'POST',
        body: { receiverId, message },
      }),
    }),
    getLastMessage: builder.query({
      query: ({ chatId }: { chatId: string }) => ({
        url: '/last',
        method: 'GET',
        data: chatId,
      }),
    }),
    updateMessage: builder.mutation({
      query: ({
        chatId,
        messageId,
        newMessage,
      }: {
        chatId: string;
        messageId: string;
        newMessage: string;
      }) => ({
        url: '/update',
        method: 'PATCH',
        body: { chatId, messageId, newMessage },
      }),
    }),
    deleteMessage: builder.mutation({
      query: ({
        chatId,
        messageId,
      }: {
        chatId: string;
        messageId: string;
      }) => ({
        url: '/update',
        method: 'DELETE',
        body: { chatId, messageId },
      }),
    }),
  }),
});

export const {
  useGetMessagesQuery,
  useGetLastMessageQuery,
  useSendMessageMutation,
  useUpdateMessageMutation,
  useDeleteMessageMutation,
} = messageApi;
