const mongoose = require('mongoose')
// const fs = require('fs');

// //Definindo a senha com readFile
// try {
//   var password = fs.readFileSync('./test.txt', 'utf8');
// } catch (err) {
//   console.error(err);
// }
// if (process.argv.length < 3) {
//   console.log('Please provide the password as an argument: node mongo.js <password>')
//   process.exit(1)
// }
//
// const password = process.argv[2]
//Conexão local:
const url = 'mongodb://localhost:27017/note-app'

// const url =
//   `mongodb+srv://mongodb-atlas-ssa:${password}@cluster0.biqov.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url)

const noteSchema = new mongoose.Schema( {
  content: String,
  date: Date,
  important: Boolean,
} )

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   content: 'Development Web React',
//   date: new Date(),
//   important: true,
// })
//
// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })
//Search notes
Note.find( {} )
  .then(result => {
    result.forEach(note => {
      console.log(note)
    } )
    mongoose.connection.close()
  } )
