import React, { useState } from 'react';

import './modal.css';

function NoteForm({active, handleClickClose, addNotes}) {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');



    function handleSubmit(e) {
        e.preventDefault();

        const date = new Date();
        const dataNote = date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear();
        const horaNote = date.getHours()+':'+date.getMinutes();

        addNotes({
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

    return (
        <div className={active ? 'show modal' : 'modal' }>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={() => handleClickClose()} ><i class="fas fa-times" ></i></span> 
                    <h2>Nova Nota</h2>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="">Titulo</label>
                            <input type="text" value={title} required onChange={event => setTitle(event.target.value)}/>    
                        </div>
                        <div>
                            <label htmlFor="">Descrição Nota</label>
                            <textarea cols="68" rows="15" value={note} required onChange={event => setNote(event.target.value)}></textarea>
                        </div>
                        <div className='button'>
                            <button>Salvar</button>
                            <button type='button' onClick={() => handleClickClose()}>Cancelar</button>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">

                </div>
            </div>
        </div>
    )
}

export default NoteForm