import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { connectDB } from './lib/db.js';

//http://localhost:3000
//http://localhost:3000/api/auth/signup
//http://localhost:3000/api/auth/login
//http://localhost:3000/api/auth/logout
//http://localhost:3000/api/messages/send


dotenv.config();
const app = express();

const __dirname = path.resolve();

const PORT = process.env.PORT || 5000; 

// Middleware to parse JSON request bodies
app.use(express.json());  

app.use("/api/auth/", authRoutes)
app.use("/api/messages/", messageRoutes)

//Make ready for Deployment
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    //If none of the above routes is visited then serve the frontend application
    app.get(/.*/, (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
    })
}



app.listen(PORT, () => { console.log(`App is running on port ${PORT} 🚀🚀`)
    connectDB();
});