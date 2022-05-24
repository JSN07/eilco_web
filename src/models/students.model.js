import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  
},
{ versionKey: false },);

const Student = mongoose.model("students", StudentSchema);

export default Student;