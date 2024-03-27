import { Schema, Types, model } from 'mongoose';
import { UserInterface } from './User';
import { Message } from './Message';

export interface ChatInterface {
  participants: string[] | UserInterface[];
  messages: Message[];
}

const ChatSchema = new Schema<ChatInterface>(
  {
    participants: [{ type: Types.ObjectId, ref: 'User' }],
    messages: [{ type: Types.ObjectId, ref: 'Message' }],
  },
  { timestamps: true }
);

export default model('Chat', ChatSchema);
