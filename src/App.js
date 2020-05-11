// pensez à importer les hooks d'état et d'effet !
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [list, setList] = useState([]);

  // utilisation du hook d'effet pour mettre à jour l'état list suite à la requête au webservices
  useEffect(() => {
    async function loadDatas(){
      var response = await fetch('https://jsonplaceholder.typicode.com/users');
      var responseJson = await response.json();
      setList(responseJson)
    }
    loadDatas()
  }, []);

  // on map sur l'état list mis à jour pour afficher la liste des amis
  var friendsList = list.map((friend, i) => {
    return(<p key={i}>{friend.name}</p>)
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ma liste d'amis :</h1>
        {friendsList}
      </header>
    </div>
  );
}

export default App;
