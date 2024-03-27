import { Schema, Types, model } from 'mongoose';
import { ChatInterface } from './Chat';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
  generateToken(): string;
  passwordComparison(password: string): boolean;
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
    password: { type: String, select: false, required: true },
    chats: [{ type: Types.ObjectId, ref: 'Chat' }],
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

UserSchema.methods.passwordComparison = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateToken = function (): string {
  return jwt.sign({ id: this._id }, `${process.env.JWT_SECRET_KEY}`, {
    expiresIn: '15d',
  });
};

export default model('User', UserSchema);
