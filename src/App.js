import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './component/Header';
import DashboardPage from './pages/DashboardPage';
import AddJoueur from './pages/AddJoueur';




function App() {

  const [lien, setLien] = useState('dash');

  function AffichePage() {
       
        
    switch (lien){
        case 'dash':return <DashboardPage />;
        case 'addJoueur':return <AddJoueur />;
            
            default: <DashboardPage />
    }
            

}


  return (
    <>

      {/* <Header modifyParentStateValue={setLien}/> */}
      <AffichePage  />
        
    
  

    </>

  )
}
export default App;
