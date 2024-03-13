import { Schema, Types, model } from 'mongoose';
import { ChatInterface } from './Chat';

export interface UserInterface {
  name: string;
  email: string;
  password: string;
  chats: ChatInterface[];
}

const UserSchema = new Schema<UserInterface>(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    chats: [{ type: Types.ObjectId, ref: 'Chat' }],
  },
  { timestamps: true }
);

export default model('User', UserSchema);
