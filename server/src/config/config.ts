import dotenv from 'dotenv';

dotenv.config();

const corsOptions = {
  origin: '',
  optionsSuccessStatus: 200
};

const PORT = process.env.PORT || 5000;

export const config = {
  server: {
    PORT,
    corsOptions
  }
};
