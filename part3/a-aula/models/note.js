const mongoose = require('mongoose')

//Teste localmente no mongodb
const url = 'mongodb://localhost:27017/note-app'
//Conexão MongoDB Atlas:
// const url = process.env.MONGODB_URI

mongoose.connect(url)
  .then()
  .catch((error) => {
    console.log('error connecting to MongoDB: ', error.message)
  } )

const noteSchema = new mongoose.Schema( {
  content: {
    type: String,
    minlength: 5,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  important: Boolean,
} )

noteSchema.set('toJSON', {
  transform:(document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
} )

module.exports = mongoose.model('note', noteSchema)
