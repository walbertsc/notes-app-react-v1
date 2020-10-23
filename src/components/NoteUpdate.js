import React, { useState } from 'react';

import './modal.css';

function NoteUpdate({active, noteselect, editNotes, handleClickClose}) {
    const [title, setTitle] = useState(noteselect.title);
    const [note, setNote] = useState(noteselect.note);

    function handleSubmit(e) {
        e.preventDefault();

        const date = new Date();
        const dataNote = date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear();
        const horaNote = date.getHours()+':'+date.getMinutes();

        editNotes({
            id: Math.floor(Math.random() * 10000),
            title: title,
            date: dataNote+' '+horaNote,
            note: note,
            select: false
        })

        setTitle('');
        setNote('');
        
        handleClickClose();
        
    }

    console.log(noteselect.title);

    return (
        <div className={active ? 'show modal' : 'modal' }>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={() => handleClickClose()}>X</span>
                    <h2>Editar Nota</h2>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="">Titulo</label>
                            <input type="text" value={title} onChange={event => setTitle(event.target.value)}/>    
                        </div>
                        <div>
                            <label htmlFor="">Descrição Nota</label>
                            <textarea cols="30" rows="10" value={note} onChange={event => setNote(event.target.value)}></textarea>
                        </div>
                        <button>Salvar</button>
                        <button>Cancelar</button>
                    </form>
                </div>
                <div className="modal-footer">

                </div>
            </div>
        </div>
    )
}

export default NoteUpdate