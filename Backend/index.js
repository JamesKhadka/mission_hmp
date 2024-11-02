import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './Routes/auth.js'
import userRoute from './Routes/user.js'
import doctoRoute from './Routes/doctor.js'
import reviewRoute from './Routes/review.js'



dotenv.config();

const app = express()
const port = process.env.PORT || 8000;

const corsOption = {
  origin: true,
}


//============ database  connection ======================//
mongoose.set('strictQuery', false)
const conn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('MongoDB Connected successfully...')
  } catch (error) {
    console.log('mongoDB connection failed...')
  }
}


// ===== middleware =============//
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));
app.use('/api/v1/auth', authRoute);     //domain/api/v1/auth/register
app.use('/api/v1/users', userRoute);   //domain/api/v1/auth/register
app.use('/api/v1/doctors', doctoRoute);
app.use('/api/v1/reviews', reviewRoute);

app.get('/', (req, res) => {
  res.send('API is not working');
})

app.listen(port, () => {
  conn();
  console.log('Server is running on port' + port);


})