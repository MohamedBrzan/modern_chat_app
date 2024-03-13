import { Schema, Types, model } from 'mongoose';
import { UserInterface } from './User';

export interface Message {
  sender: string | UserInterface;
  receiver: string | UserInterface;
  message: string;
}

const MessageSchema = new Schema<Message>(
  {
    sender: { type: Types.ObjectId, ref: 'User' },
    receiver: { type: Types.ObjectId, ref: 'User' },
    message: { type: String },
  },
  { timestamps: true }
);

export default model('Message', MessageSchema);
