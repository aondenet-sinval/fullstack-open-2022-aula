const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/note-app-test'

mongoose.connect(url)

const noteSchema = new mongoose.Schema( {
  content: String,
  date: Date,
  important: Boolean,
} )

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   content: 'Development Azure CosmosDB',
//   date: new Date(),
//   important: true,
// })
//
// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })
//Search notes
let arr = []
const Search = async () => {
  const response = await Note.find( {} )
   response.forEach(note => {
        // console.log(note)
        arr.push(note)
      } )
  // console.log('response await: ', response)
}
Search()

// Note.find( {} )
//   .then(result => {
//     result.forEach(note => {
//       console.log(note)
//       arr.push(note)
//     } )
//     mongoose.connection.close()
//   } )

console.log('arr scope ',arr)
