import React from 'react';

export default function ResultTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={props.sortByName}>Name</th>
          <th>Hus</th>
          <th>Skådespelare</th>
          <th>Student</th>
          <th>Anställda</th>
        </tr>
      </thead>
      <tbody>
        {
          /* Skiver Character för att arbeta med ETT objekt åt gången inte characterS} */
          props.data.map((character, index) => {
            return (
              <tr
                key={index}
                className={character.house ? character.house.toLowerCase() : ''}
                onClick={() => props.displayCharacter(index)}
              >
                {/*  Lägger till färgen bakom alla som tillhör ett hus */}
                <td>{character.name}</td>
                <td>{character.house}</td>
                <td>{character.actor}</td>
                <td>{character.hogwartsStudent ? 'Ja' : 'Nej'}</td>
                {/* Kortare version av if/else. Om värdet är sant betraktas värdet som ett vilkor. Passar bra om man har två möjliga värden att arbeta med.  */}
                <td>{character.hogwartsStaff ? 'Ja' : 'Nej'}</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}
