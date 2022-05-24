import express from 'express'
import studentsRoutes from './routes/students.route.js'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express()

const HOSTNAME = '127.0.0.1';
const PORT = 5000;

mongoose.connect('mongodb+srv://jordans:VOOjWDegwToB9k6H@testapi.ipjio.mongodb.net/eilco?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hello !");
})

app.use('/students', studentsRoutes);

app.listen(PORT, () =>
  console.log(`Server is running on: http://${HOSTNAME}:${PORT}.`)
)