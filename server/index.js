import express from 'express'
import dotenv from 'dotenv';
import authRoute from './src/routes/authRoutes.js'
import cors from 'cors';
import { dbConnect } from './config/db.js';
import taskRoute from './src/routes/taskRouter.js'
import {validateToken} from './src/middlewares/authMiddleware.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT||5000;
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.json({msg:"Home page of TaskCreater app"});
})

 app.use('/api/auth',authRoute);
 app.use('/api/tasks',validateToken,taskRoute);//only logged in user can accescc this url

dbConnect();

app.listen(PORT,()=>console.log("Server is running on port : ",PORT));
// export default app;//while deploying in versel we need to export this



