import React from 'react';

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
                {noteselect.note}
            </div>
        </div>
    )
}


export default NoteView