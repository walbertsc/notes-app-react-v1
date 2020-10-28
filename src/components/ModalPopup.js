import React from 'react';

import './modal.css';

function ModalPopup({show, ConfirmDelete, titlenota}) {
    return(
        <div className={show ? 'modal show': 'modal'}>
            <div className="modal-content"> 
                <div className="container-modal">
                    <h2><i className="far fa-trash-alt"/> Excluir Nota</h2>
                    <p>Confirma a exclusão da nota <strong>{titlenota}</strong>  ?</p>
                    
                    <div className="clearfix">
                        <button type="button" className="btn cancelbtn" onClick={() => ConfirmDelete(false)}>Cancelar</button>
                        <button type="button" className="btn deletebtn" onClick={() => ConfirmDelete(true)}>Excluir</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ModalPopup