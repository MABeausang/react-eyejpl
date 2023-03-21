import React from 'react';

export default function Character(props) {
  if (!props.character) {
    return <div></div>;
  } else {
    return (
      <div>
        <div>
          <img src={props.character.image} />
        </div>
        <div>Hus: {props.character.house}</div>
        <div>Kön: {props.character.gender}</div>
        <div>Ögonfärg: {props.character.eteColour}</div>
        <div>Hårfärg: {props.character.hairColour}</div>
        {props.character.wand.wood.length > 0 && <div>Trollstav: </div>};
        <div>Patronus: {props.character.patronus}</div>
        <div>Skådespelare: {props.character.actor}</div>
      </div>
    );
  }
}
