import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import noteService from './services/notes'

const Notification = ({message})=>{
  if (message === null) {
    return null
  }

  return(
    <div className="error">
      {message}
    </div>
  )
}
const Footer = ()=>{
const footerStyle={
  color: 'green',
  fontStyle: 'italic',
  fontSyze: 16
}
  return(
    <div style={footerStyle}>
      Sinval Gomes desenvolvimento web ...
    </div>
  )
}

const App = (props) => {
const [notes, setNotes] = useState([]);
const [newNote, setNewNote] = useState('');
const [showAll,setShowAll] = useState(true);
const [errorMessage, setErrorMessage] = useState(null)

// console.log('render', notes.length, 'notes')

const toggleImportanceOf = (id) => {
  console.log('toggleImportanceOf', id, typeof(id));
  const note = notes.find(n => n.id === id )
  const changedNote = { ...note, important: !note.important }
  // console.log('note.important ', note.important);
  noteService
    .update(id, changedNote).then(returnedNote => {
    setNotes(notes.map(note => note.id !== id ? note : returnedNote))
  })
  .catch(error => {
      setErrorMessage(
      `the note '${note.content}'
      was already removed from server`
    )
    setTimeout(()=>{
      setErrorMessage(null)
    }, 5000)
      setNotes(notes.filter(n => n.id !== id))
    })
}

useEffect(()=>{
  console.log('effect')
  noteService
    .getAll()
    .then(initialNote => {
      setNotes(initialNote)
    })
  }, [])

  const addNote = (event) => {
     event.preventDefault();
     // console.log('button clicked', event.target);
     const noteObject = {
     content: newNote,
     date: new Date().toISOString(),
     important: Math.random() < 0.5,
   }
   noteService
    .create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })


 }
 const notesToShow = showAll
                     ? notes
                     : notes.filter(note => note.important === true);

 const handleNoteChange = (event) => {
  console.log(event.target.value)
  setNewNote(event.target.value)
}
  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map((note, index) => (
          <Note key={index}
                note={note}
                toggleImportance={() => toggleImportanceOf(note.id)} />
        ))}
      </ul>
      <form onSubmit={addNote}>
         <input value={newNote}
                onChange={handleNoteChange} />
         <button type="submit">save</button>
       </form>
       <Footer />
    </div>
  )
}

export default App;
