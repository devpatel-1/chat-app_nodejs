const notesDiv = document.getElementById('notes')

// Load Notes
const loadNotes = () => {

    fetch('https://chat-app-nodejs-ag2d.onrender.com/notes')
    .then((response) => {
        return response.json()
    })
    .then((notes) => {

        notesDiv.innerHTML = ''

        // If no notes
        if (notes.length === 0) {

            notesDiv.innerHTML = `
    <div class="no-notes">
        No Notes Available
    </div>
`

            return
        }

        notes.forEach((note) => {

            if (note.title === '' && note.body === '') {
                return
            }
        
            const div = document.createElement('div')
        
            div.className = 'note'
        
            div.innerHTML = `
                <h3>${note.title}</h3>
        
                <p>${note.body}</p>
        
                <button class="delete-btn"
                onclick="deleteNote('${note.title}')">
        
                Delete
        
                </button>
            `
        
            notesDiv.appendChild(div)
        })
    })
}

// Add Note
const addNote = () => {

    const title = document.getElementById('title').value

    const body = document.getElementById('body').value

    fetch('https://chat-app-nodejs-ag2d.onrender.com/notes', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            title: title,
            body: body
        })
    })
    .then(() => {

        document.getElementById('title').value = ''

        document.getElementById('body').value = ''

        loadNotes()
    })
}

// Delete Note
const deleteNote = (title) => {

    fetch('https://chat-app-nodejs-ag2d.onrender.com/notes/' + encodeURIComponent(title), {
        method: 'DELETE'
    })
    .then(() => {

        loadNotes()
    })
}

loadNotes()