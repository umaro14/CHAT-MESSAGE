import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';

//http://localhost:3000/api/auth/signup
//http://localhost:3000/api/auth/login
//http://localhost:3000/api/auth/logout
//http://localhost:3000/api/messages/send


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000; 

app.use("/api/auth/", authRoutes)
app.use("/api/messages/", messageRoutes)



app.listen(PORT, () => { console.log(`App is running on port ${PORT} 🚀🚀`);});