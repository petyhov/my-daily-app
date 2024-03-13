import mongoose from 'mongoose';

export const connectToDB = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    mongoose.connection.on('connected', () => console.log('connected'));
    mongoose.connection.on('open', () => console.log('open'));
    mongoose.connection.on('disconnected', () => console.log('disconnected'));
    mongoose.connection.on('reconnected', () => console.log('reconnected'));
    mongoose.connection.on('disconnecting', () => console.log('disconnecting'));
    mongoose.connection.on('close', () => console.log('close'));

    await mongoose.connect(process.env.MONGO_URL);

    console.log('Mongo Connection successfully established.');
  } catch (error) {
    throw new Error('Error connecting to Mongoose');
  }
};
