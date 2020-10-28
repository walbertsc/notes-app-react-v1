import React, { useState } from 'react';

import './App.css';
import ModalPopup from './components/ModalPopup';
import NoteForm from './components/NoteForm';
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
  const [novo, setNovo] = useState(false);
  const [edit, setEdit] = useState(false);
  const [operation, setOperation] = useState(false);
  const [listshow, setListShow] = useState(true);
  const [show, setShow] = useState(false);
  
  
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
    setNovo(false);
    setEdit(false);
    setOperation(false);
    setListShow(true);
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
    setNovo(false);
    setEdit(false);
    setOperation(false);
    setListShow(true);
    
  }
  
  function removeNote() {
    
    if (noteselect.id === null ) {
      return
    }
    
    const deleteNote = [...notes].filter(note => note.id !== noteselect.id);

    setNotes(deleteNote);
    setNoteselect({id: null, title: '', date: '', note:''});

  }

  function cancelEditMode() {
    setNovo(false);
    setEdit(false);
    setOperation(false);
    setListShow(true);
  }
  
  function handleClickEdit() {
    if (noteselect.id === null) {
      return;
    }
    
    setOperation(true);
    setEdit(true);
    setNovo(false);

    setListShow(false);
  }

  function handleClickNew() {
       
    setOperation(true);
    setEdit(false);
    setNovo(true);

    setListShow(false);
  }

  function handleClickDelete() {
    if (noteselect.id === null) {
      return;
    }

    setShow(true);
  }

  function ConfirmDelete(op) {
    
    if (op) {
      removeNote();
    }

    setShow(false);
  }

  return (
    <>
      <div className="navbar">
        <span className='logo'><i class="fas fa-tasks"></i></span>
        <span className='title-app'>Notes App React</span>
      </div>
      
      <div className="container">
        
        <div className={listshow ? "list-note" : "list-note noshow"}>
          <div className="tool-bar">
             <ul>
                 <li className='item-menu'><i className="far fa-file-alt" onClick={() => handleClickNew()}></i></li>
                 <li className='item-menu'><i className="fas fa-pencil-alt" onClick={() => handleClickEdit()}></i></li>
                 <li className='item-menu'><i className="far fa-trash-alt" onClick={() => handleClickDelete()}></i></li>
             </ul>   
          </div>
          <NotesList notes={notes} selectNote={selectNote} />
        </div>

        {/* {noteselect.id != null ? (<NoteView noteselect={noteselect} />) : '' }  */}

        { !operation 
          ? <NoteView noteselect={noteselect} />
          : (<NoteForm edit={edit} novo={novo} addNotes={addNotes} editNotes={editNotes} cancelEditMode={cancelEditMode} noteselect={noteselect}/>)}

        
      </div>
   
      <ModalPopup show={show} ConfirmDelete={ConfirmDelete} titlenota={noteselect.title} />       
    </>
  );
}

export default App;
