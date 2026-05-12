
const express = require('express')
const cors = require('cors')

const notes = require('./notes')

const app = express()

const port = process.env.PORT || 3000

app.use(cors())

app.use(express.json())

// Get Notes
app.get('/notes', (req, res) => {

    const allNotes = notes.loadNotes()

    res.send(allNotes)
})

// Add Note
app.post('/notes', (req, res) => {

    const title = req.body.title

    const body = req.body.body

    notes.addNote(title, body)

    res.send({
        success: true
    })
})

// Delete Note
app.delete('/notes/:title', (req, res) => {

    const title = decodeURIComponent(req.params.title)

    notes.removeNote(title)

    res.send({
        success: true
    })
})

app.listen(port, () => {

    console.log('Server started')
})