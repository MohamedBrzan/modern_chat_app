import { Schema, Types, model } from 'mongoose';
import { ChatInterface } from './Chat';

enum Gender {
  male = 'male',
  female = 'female',
}

export interface UserInterface {
  gender: Gender;
  username: string;
  email: string;
  password: string;
  chats?: ChatInterface[];
}

const UserSchema = new Schema<UserInterface>(
  {
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    gender: {
      type: String,
      enum: Gender,
      default: Gender.male,
      required: true,
    },
    password: { type: String, required: true },
    chats: [{ type: Types.ObjectId, ref: 'Chat' }],
  },
  { timestamps: true }
);

export default model('User', UserSchema);
