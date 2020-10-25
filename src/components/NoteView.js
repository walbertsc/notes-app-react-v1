import React , { useState } from 'react';

import MDEditor from '@uiw/react-md-editor';
import NoteUpdate from './NoteUpdate';

import './noteview.css';

function NoteView({noteselect, editNotes, removeNote}) {
    const [ativo, setAtivo] = useState(false)
  
    
    function handleOpenEdit() {
        setAtivo(true);
    }

    function handleClickClose() {
        setAtivo(false);
    }

    function handleClickDelete() {
        removeNote(noteselect.id);
    }

    return (
        <div className="view-note">
            <div className="header-view">
                <span>{noteselect.title} - {noteselect.date}</span> 
                <div className="icons">
                    <lu>
                        <li><i className="fas fa-pencil-alt" onClick={() => handleOpenEdit()} /></li>
                        <li><i className="far fa-trash-alt" onClick={() => handleClickDelete()}/></li>
                    </lu>
                    
                    {/* <i className="fas fa-pencil-alt" onClick={() => handleOpenEdit()}></i>
                    <i className="far fa-trash-alt" onClick={() => handleClickDelete()}></i> */}
                </div>
            </div>
            <div className="detail-note">
                <MDEditor.Markdown source={noteselect.note} />
            </div>

            {ativo && (
            <NoteUpdate
             active={ativo}
             noteselect={noteselect}
             editNotes={editNotes}
             handleClickClose={handleClickClose}
            />
            )}

        </div>
    )
}


export default NoteView