import React from 'react';

function NotesList({notes, selectNote }) {
    return notes.map(note => (
        <div 
            key={note.id}
            className={note.select ? 'notes-row select' : 'notes-row' }
            onClick={() => selectNote(note.id)}
            >
            <span className="title-note">{note.title}</span>
            <span className="date-note">{note.date}</span>
        </div>
    ))
};


export default NotesList;