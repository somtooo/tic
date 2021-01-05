import express from 'express';
import {json} from 'body-parser';

const app = express()
app.use(json());

app.get('/api/users/currentuser',(req,res)=>{
  console.log("bad")
  res.send('Hi there')
})
app.listen(()=>{
  console.log('listening on port 3000')
})