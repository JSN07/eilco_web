import express from 'express'
import studentsRoutes from './routes/students.route.js'
import bodyParser from 'body-parser';

const app = express()

const HOSTNAME = '127.0.0.1';
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hello !");
})

app.use('/students', studentsRoutes);

app.listen(PORT, () =>
  console.log(`Server is running on: http://${HOSTNAME}:${PORT}.`)
)