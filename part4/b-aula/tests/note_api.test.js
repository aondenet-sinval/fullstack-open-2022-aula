const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Note = require('../models/note')
//init
const initialNotes = [
  {
  content: 'HTML is easy',
  date: new Date (),
  important: false,
  },
  {
  content: 'Browser can execute only Javascript',
  date: new Date (),
  important: true,
  },
]
beforeEach(async () => {
  await Note.deleteMany({})
  let noteObject = new Note( initialNotes[0])
  await noteObject.save()
  noteObject = new Note(initialNotes[1])
  await noteObject.save()
})
//end
//Teste para ver se uma nota sem conteúdo será salva no banco de dados
//comando para execução individual:
//npm run test -- -t 'note without content is not added'
test('note without content is not added', async () => {
  const newNote = {
  important: true
  }
  await api
    .post('/api/notes')
    .send(newNote)
    .expect(400)//Verifique a consistencia do teste alterando aqui para 201
    const response = await api.get('/api/notes')
    expect(response.body).toHaveLength(initialNotes.length)
})
//Teste para conferir se a nota salva bate com o retorno
test('a valid note can be added', async () => {
const newNote = {
  content: 'async/await simplifies making async calls',
  important: true,
}
await api
  .post('/api/notes')
  . send(newNote)
  .expect(201)
  .expect('Content-Type', /application\/json/)
  const response = await api.get('/api/notes')
  const contents = response.body.map(r => r.content)
  expect(response.body).toHaveLength(initialNotes.length + 1)
  expect(contents).toContain(
    'async/await simplifies making async calls'
  )
})
test('notes are returned as json', async () => {
  await api
  .get('/api/notes')
  .expect(200)
  .expect('Content-Type', /application\/json/)
} )
test('all notes are retorned', async () => {
  const response = await api.get('/api/notes')
  expect(response.body).toHaveLength(initialNotes.length)
})
test('a specific note is within the returned notes', async () => {
  const response = await api.get('/api/notes')

  const contents = response.body.map( r => r.content )
  expect(contents).toContain(
    'Browser can execute only Javascript'
  )
})
afterAll(() => {
  mongoose.connection.close()
} )
