import React, { useState } from 'react';

import MDEditor from '@uiw/react-md-editor';

// import './modal.css';

function NoteForm({edit, novo, addNotes, editNotes, cancelEditMode, noteselect}) {
    const [title, setTitle] = useState(edit ? noteselect.title : '');
    const [note, setNote] = useState(edit ? noteselect.note : '' );

    function handleSubmit(e) {
        e.preventDefault();

        const date = new Date();
        const dataNote = date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear();
        const horaNote = date.getHours()+':'+date.getMinutes();

        if (novo) { 

            addNotes({
                id: Math.floor(Math.random() * 10000),
                title: title,
                date: dataNote+' '+horaNote,
                note: note,
                select: false
            })

        }
        
        if (edit) {
            editNotes({
                title: title,
                date: dataNote+' '+horaNote,
                note: note,
                select: false
            })
        }

           
        
    }

    return (
        
        <div className="preview">
            <form onSubmit={handleSubmit}> 
                <div className="title-bar edit">
                    {novo 
                        ? (<span><i className="far fa-file-alt"></i> Nova Nota</span>)
                        : (<span><i className="fas fa-pencil-alt"></i> Editar Nota</span>)}                
                    <input
                     type="text"
                     placeholder="Titula da Nota"
                     maxlength="29"
                     value={title}
                     onChange={event => setTitle(event.target.value)}
                     required
                    />
                    <div className="button">                
                        <button>Salvar</button>
                        <button type="button" onClick={() => cancelEditMode() }>Cancelar</button>
                    </div>
                    <span className="title-preview">Preview HTML</span>                    

                </div>
        
                <div className="new-note">
                    
                    <div className="edit-note">
                        <textarea
                         placeholder="Informe o texto da nota em formato Markdown..."
                         value={note}
                         onChange={event => setNote(event.target.value)}
                         required></textarea>
                    </div>

                    <div className="html-view">
                        <MDEditor.Markdown source={note}/>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default NoteForm