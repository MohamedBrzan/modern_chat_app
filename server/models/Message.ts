import { Schema, Types, model } from 'mongoose';
import { UserInterface } from './User';

export interface Message {
  sender: string | UserInterface;
  receiver: string | UserInterface;
  message: string;
  isDeleted: boolean;
  isEdited: boolean;
}

const MessageSchema = new Schema<Message>(
  {
    sender: { type: Types.ObjectId, ref: 'User', required: true },
    receiver: { type: Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    isDeleted: { type: Boolean, default: false, required: true },
    isEdited: { type: Boolean, default: false, required: true },
  },
  { timestamps: true }
);

export default model('Message', MessageSchema);
