import React from 'react';

import MDEditor from '@uiw/react-md-editor';


function NoteView({noteselect}) {
    
    return (
        <div className="preview">
            <div className="title-bar">
                 <span>{noteselect.title}</span>
                  <span className="date-note-bar">
                    {noteselect.id != null ?
                     (<><i className="far fa-calendar-alt"></i>{noteselect.date}</>)
                     :''}
                  </span>
                     
             </div>
    
            <div className="view-note">
              <MDEditor.Markdown source={noteselect.note}/>
            </div>

        </div>
         )
}


export default NoteView