interface Message {
  receiver: string;
  sender: string;
  message: string;
  isDeleted: boolean;
  isEdited: boolean;
  createdAt: string;
  updatedAt: string;
}

export default Message;
