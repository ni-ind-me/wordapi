const express = require('express');
const app = express();

require('dotenv').config();
app.use(express.json());
const router = require('./routes/routes');
const {connectDB} = require('./db/connect');

const PORT = process.env.PORT || 8080;

app.get('/', (req, res)=>{
    res.send("Hi");
});

app.use('/api/', router);

const start = async ()=>{
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, ()=>{
        console.log(`Listening on ${PORT}`);
    })
}

start();