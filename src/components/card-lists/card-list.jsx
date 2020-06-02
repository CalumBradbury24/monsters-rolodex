import React from "react";
import "./card-list.css";
import {Card} from './Card/cardComponent'
export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((
        monster //Unique key for each object because React needs to know which element to update if one element has a value that changes
      ) => (
        <Card key={monster.id} monster = {monster}/>
      ))}
    </div>
  );
};
