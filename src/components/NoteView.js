import React from 'react';

import MDEditor from '@uiw/react-md-editor';

function NoteView({noteselect}) {
    
    return (
        <div className="view-note">
            <div className="header-view">
                <span>{noteselect.title} - {noteselect.date}</span> 
                <div className="icons">
                    <i className="fas fa-pencil-alt"></i>
                    <i className="far fa-trash-alt"></i>
                </div>
            </div>
            <div classNameName="detail-note">
                <MDEditor.Markdown source={noteselect.note} />
            </div>
        </div>
    )
}


export default NoteView