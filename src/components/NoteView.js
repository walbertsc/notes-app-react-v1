import React from 'react';

import MDEditor from '@uiw/react-md-editor';


function NoteView({noteselect}) {
    
    return (
          <MDEditor.Markdown source={noteselect.note} />
         )
}


export default NoteView