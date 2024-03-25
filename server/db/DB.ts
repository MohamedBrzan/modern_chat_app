import mongoose from 'mongoose';

export default () => {
  mongoose
    .connect(`${process.env.MONGO_URL}`)
    .then(() => console.log('DB Connected 🚀🚀🚀'))
    .catch(() => console.log(`DB Disconnected 🌋🌋🌋🌋`));
};
