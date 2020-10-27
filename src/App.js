import React, { useState } from 'react';

import './App.css';
// import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import NoteView from './components/NoteView';

const listNote = [

  {id: 1, title: 'Estudo Reactjs', date: '18.10.2020 10:30', note: '# Organizar o material de estudo', select: false},
  {id: 2, title: 'Aprender Git e Github', date: '18.10.2020 10:30', note: '**Estudando Git e Gibhub**', select: false},
  {id: 3, title: 'Projeto para estudo', date: '18.10.2020 10:30', note: 'Começando os estudo com react', select: false},
  {id: 4, title: 'Estudo Reactjs', date: '18.10.2020 10:30', note: '- **Atenção** Estudo de html + css.', select: false},
]

function App() {
  const [notes, setNotes] = useState(listNote);
  const [noteselect, setNoteselect] = useState({id: null, title: '', date: '', note:''});
  const [modalactive, setModalActive] = useState(false);
  
  
  const selectNote = id => {
    
    let selectedNotes = notes.map(note => {
        if (note.id === id) {
            
            note.select = true;
             setNoteselect({
              id: id,
              title: note.title,
              date: note.date,
              note: note.note
            });
        } else {
            note.select = false;
        }

        return note
    });
   
    setNotes(selectedNotes);  
    
  

  }

  function addNotes(note) {
    const newNote = [note,...notes];

    setNotes(newNote);
  }

  function editNotes(editNote) {
    let updateNotes = notes.map(note => {
      if (note.id === noteselect.id) {
        note.title = editNote.title;
        note.date = editNote.date;
        note.note = editNote.note;
        note.select = true;
      }
      return note
    })
    setNotes(updateNotes);
    selectNote(noteselect.id);
    
  }
  
  function removeNote(id) {
    const deleteNote = [...notes].filter(note => note.id !== id);

    setNotes(deleteNote);
    setNoteselect({id: null, title: '', date: '', note:''});

  }



  return (
    <>
      <div className="navbar">
        <span className='logo'><i class="fas fa-tasks"></i></span>
        <span className='title-app'>Notes App React</span>
      </div>
      
      <div className="container">
        
        <div className="list-note">
          <div className="header">
             <ul>
                 <li className='item-menu'><i className="far fa-file-alt"></i></li>
                 <li className='item-menu'><i className="fas fa-pencil-alt"></i></li>
                 <li className='item-menu'><i className="far fa-trash-alt"></i></li>
             </ul>   
          </div>
           
                     
           <NotesList notes={notes} selectNote={selectNote} />
        </div>

        <div className="preview">
            <div className="title-bar">
                {noteselect.id != null ? (
                <>
                  <span>{noteselect.title}</span>
                  <span className="date-note-bar">
                    <i class="far fa-calendar-alt"></i>{noteselect.date}
                  </span>
                </>) : '' }
                
             </div>
    
            <div className="view-note">
              {noteselect.id != null ? (<NoteView noteselect={noteselect} />) : '' } 
            </div>

        </div>
 
        
      </div>
   

    </>
  );
}

export default App;
