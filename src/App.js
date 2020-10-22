import React, { useState } from 'react';

import './App.css';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import NoteView from './components/NoteView';

const listNote = [

  {id: 1, title: 'Estudo Reactjs', date: '18.10.2020 10:30', note: 'Organizar o material de estudo', select: false},
  {id: 2, title: 'Aprender Git e Github', date: '18.10.2020 10:30', note: 'Começando os estudo com react', select: true},
  {id: 3, title: 'Projeto para estudo', date: '18.10.2020 10:30', note: 'Começando os estudo com react', select: false},
  {id: 4, title: 'Estudo Reactjs', date: '18.10.2020 10:30', note: 'Começando os estudo com react', select: false},
]

function App() {
  const [notes, setNotes] = useState(listNote);
  const [noteselect, setNoteselect] = useState({id: null, title: 'Selecione uma Nota', date: '', note:''});
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
            })
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

  function handleClickOpen() {
    setModalActive(true);
  }
  
  function handleClickClose() {
    setModalActive(false);
    
  }


  return (
    <>
      <div className="navbar">
          <span>Notes App React</span>
          <span onClick={() => handleClickOpen()}>Nova Nota</span>
      </div> 
      
      <div className="container">
        
        <div className="list-note">
            <div className="header">
                <span>Minhas Notas</span> 
            </div>
            <div className="search">
                <input type="text" placeholder="Pesquisa..." />
            </div>
            
            {/* Lista de Notas */}

           <NotesList notes={notes} selectNote={selectNote}/>
            

        </div>

        <NoteView noteselect={noteselect} />

    </div>

    <NoteForm active={modalactive} handleClickClose={handleClickClose} addNotes={addNotes}/>

    </>
  );
}

export default App;
