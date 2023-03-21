import React, { useState, useEffect } from 'react';
import ResultTable from './ResultTable';
import Character from './Character';
import './style.css';

export default function App() {
  const [characters, setCharactars] = useState([]);
  const [sortOrder, setSortOrder] = useState(1);
  const [activeCharacter, setActiveCharacter] = useState(null);
  const [mode, setMode] = useState('results');

  const uri = 'https://hp-api.onrender.com/api/characters';

  useEffect(() => {
    fetch(uri)
      .then((response) => response.json())
      .then((data) => setCharactars(data)); // Får tilltäng till en array med karaktärer.
  }, []); // Använder [] för en tom array som ändras beroende på vilken data som förs in.

  function sortByName() {
    let charatersCopy = [
      ...characters,
    ]; /* Skapar ny array med [] och lägger in innehåll i den genom att använda sig av variabeln charaters och packar upp den.  */
    charatersCopy.sort(
      (a, b) => sortOrder * a.name.localeCompare(b.name)
    ); /* Sorterar kopian på arrayen. Använder sig av inbyggda strängar som heter localeCompare.   */
    setCharactars(charatersCopy);
    setSortOrder(-sortOrder);
  }

  function displayCharacter(index) {
    setActiveCharacter(characters[index]);
    setMode('details');
  }

  return (
    <div>
      <h1>Harrry Potter!</h1>
      <p>The boy who lived. </p>
      {mode === 'details' ? (
        <div>
          <Character character={activeCharacter} />
          <button onClick={() => setMode('results')}>Tillbaka</button>
        </div>
      ) : (
        <ResultTable
          data={characters}
          displayCharacter={displayCharacter}
          sortByName={sortByName}
        />
      )}
    </div>
  );
}
