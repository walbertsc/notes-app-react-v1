import React from 'react';

import './modal.css';

function NoteForm({active, handleClickClose, addNotes}) {
    
    function handleSubmit(e) {
        e.preventDefault();

        const date = new Date();
        const datanote = date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear()+' '+date.getHours()+':'+date.getMinutes();

        addNotes({
            id: Math.floor(Math.random() * 10000),
            title: 'Nota Teste',
            date: datanote,
            note: 'Teste com nova nota',
            select: false
        })

        handleClickClose();
    }

    return (
        <div className={active ? 'show modal' : 'modal' }>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={() => handleClickClose()}>X</span>
                    <h2>Nova Nota</h2>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="">Titulo</label>
                            <input type="text"/>    
                        </div>
                        <div>
                            <label htmlFor="">Descrição Nota</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
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

export default NoteForm