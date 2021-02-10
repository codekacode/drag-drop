const STORE = {
  notes: [
    {id: 1, color: "black", content: "Some content"},
    {id: 2, color: "purple", content: "Some content"},
    {id: 3, color: "red", content: "Some content"}
  ]  
}

function renderNote(note) {
  return `<li draggable="true" data-id="${note.id}" 
          class="${note.color}">
          ${note.content}</li>`;
}

function renderNotes() {
  const container = document.querySelector('.js-content');
  const list = `<ul>${STORE.notes.map(renderNote).join('')}</ul>`
  container.innerHTML = list;
}

function addDragListeners() {
  const container = document.querySelector('.js-content');
  container.addEventListener('dragstart', (e) => {
    const note = e.target;
    note.classList.add('dragging');
    
  })
  container.addEventListener('dragend', (e) => {
    const note = e.target;
    note.classList.remove('dragging');
    
  })

  container.addEventListener('dragenter', (e) => {
    const note = e.target;
    note.classList.add('hover');
    
  })

  container.addEventListener('dragleave', (e) => {
    const note = e.target;
    note.classList.remove('hover');
    
  })

  container.addEventListener('dragover', (e) => {
    e.preventDefault();
    return false
    
  })

  container.addEventListener('drop', (e) => {
    
    
  })
}


renderNotes()
addDragListeners()