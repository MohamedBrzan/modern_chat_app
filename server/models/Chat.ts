import { Schema, Types, model } from 'mongoose';
import { UserInterface } from './User';
import { Message } from './Message';

export interface ChatInterface {
  members: {
    first: string | UserInterface;
    second: string | UserInterface;
  };
  messages: Message[];
}

const ChatSchema = new Schema<ChatInterface>(
  {
    members: {
      first: { type: Types.ObjectId, ref: 'User' },
      second: { type: Types.ObjectId, ref: 'User' },
    },
    messages: [{ type: Types.ObjectId, ref: 'Message' }],
  },
  { timestamps: true }
);

export default model('Chat', ChatSchema);