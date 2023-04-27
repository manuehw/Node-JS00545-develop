import express from 'express';
import cors from 'express';
import route from './user/infrastructure/route/route';

const app = express();
app.use(cors());
app.use(express.json());

const PORT =  3001;

app.use(route);
app.listen(PORT, ()=> console.log(`Users, listen on port ${PORT}`))