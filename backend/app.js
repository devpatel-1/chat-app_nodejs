const express = require('express')

const cors = require('cors')

const Note = require('./note')

const app = express()

const port = process.env.PORT || 3000

app.use(cors())

app.use(express.json())

// Get Notes
app.get('/notes', async (req, res) => {

    const notes = await Note.find()

    res.send(notes)
})

// Add Note
app.post('/notes', async (req, res) => {

    const note = new Note({

        title: req.body.title,

        body: req.body.body
    })

    await note.save()

    res.send({
        success: true
    })
})

// Delete Note
app.delete('/notes/:title', async (req, res) => {

    const title = decodeURIComponent(req.params.title)

    await Note.findOneAndDelete({
        title: title
    })

    res.send({
        success: true
    })
})

app.listen(port, () => {

    console.log('Server started')
})