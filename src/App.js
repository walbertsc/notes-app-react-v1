import React from 'react';

import './App.css';

function App() {
  return (
    <>
      <div class="navbar">
          <span>Notes App React</span>
      </div> 
      
      <div class="container">
        
        <div class="list-note">
            <div class="header">
                <span>Minhas Notas</span> 
            </div>
            <div class="search">
                <input type="text" placeholder="Pesquisa..." />
            </div>

            <div class="notes-row">
                <span class="title-note">Titulo Nota</span>
                <span class="date-note">21.10.2020 12:04</span>
            </div>
            

        </div>

        <div class="view-note">
            <div class="header-view">
                <span>Titulo Nota - 21.10.2020 12:04</span> 
                <div class="icons">
                    <i class="fas fa-pencil-alt"></i>
                    <i class="far fa-trash-alt"></i>
                </div>
            </div>
            <div class="detail-note">
                
            </div>
        </div>
    </div>

    </>
  );
}

export default App;
