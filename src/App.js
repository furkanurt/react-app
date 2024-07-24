import React from 'react';
import './styles.css';
import { createElement , useState , useEffect } from 'react';
import './tailwind.css';
import Button from './components/button';
import Tab from './components/Tab';



function App() {
  const [activeTab , SetActivetab] = useState(1);
   return (
 <>
 <div style={{padding:20}}> 
  <button onClick={() => SetActivetab(2)}>
    aktif tabı değiştir
  </button>
  <Tab activeTab={activeTab}>
    <Tab.Panel title="hakkında">1. TAB</Tab.Panel>
    <Tab.Panel title="profil">2. TAB</Tab.Panel>
    <Tab.Panel title="ayarlar">3. TAB</Tab.Panel>
  </Tab>
 </div>
    <div style={{padding:20}}>
      <Button text="bu is" variant="success" />
      <Button text="bu is"/>
    </div>
    </>
   );
  
}

export default App;
