import React from 'react';
import './styles.css';
import { createElement } from 'react';


function App() {
  const h1 = ('h1', null , 'Furkan Onur Tozlu');
  return createElement ('main', {
    className: 'main',
    id: 'main',
  }, h1
    
   )
   
  return (
   <main id='main' className='main'>
     <h1>Furkan Onur Tozlu</h1>
   </main>
  );
}

export default App;
