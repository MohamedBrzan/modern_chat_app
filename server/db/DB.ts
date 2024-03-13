import mongoose from 'mongoose';

export default () => {
  mongoose
    .connect('mongodb://localhost:27017/SocketIo')
    .then(() => console.log('DB Connected 🚀🚀🚀'))
    .catch(() => console.log(`DB Disconnected 🌋🌋🌋🌋`));
};
