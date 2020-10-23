import React , { useState } from 'react';

import MDEditor from '@uiw/react-md-editor';
import NoteUpdate from './NoteUpdate';

function NoteView({noteselect, editNotes}) {
    const [ativo, setAtivo] = useState(false)
  
    
    function handleOpenEdit() {
        setAtivo(true);
    }

    function handleClickClose() {
        setAtivo(false);
    }

    return (
        <div className="view-note">
            <div className="header-view">
                <span>{noteselect.title} - {noteselect.date}</span> 
                <div className="icons">
                    <i className="fas fa-pencil-alt" onClick={() => handleOpenEdit()}></i>
                    <i className="far fa-trash-alt"></i>
                </div>
            </div>
            <div classNameName="detail-note">
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