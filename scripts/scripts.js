const saveBtn = document.getElementById('saveBtn');
const titleInput = document.getElementById('titleTxt');
const contentInput = document.getElementById('contentTxt');
const notesContainer = document.getElementById('notes-container');

document.addEventListener('DOMContentLoaded', showNotes);

saveBtn.addEventListener('click', (e) => {

    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (title === '' || content === '') 
        return alert('Por favor, completa ambos campos.');

    const newNote = { title, content };
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    notes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(notes));

    titleInput.value = '';
    contentInput.value = '';

    showNotes();
});

function showNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notesContainer.innerHTML = ''; 

    notes.forEach((note, index) => {
        const noteCard = document.createElement('article');
        noteCard.classList.add('note');

        noteCard.innerHTML = `
        <h3>${note.title}</h3>a
        <p>${note.content}</p>
        <button onclick="deleteNote(${index})" class="delete-btn">Eliminar</button>
        `;

        notesContainer.appendChild(noteCard);
    });
}

function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}
