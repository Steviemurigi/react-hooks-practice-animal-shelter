import React from "react";

function Filters({onChangeType, onFindPetsClick}) {
  function handleChange(event){
    console.log(`${event.target.value}`)
    const selectedType = event.target.value;
    onChangeType(selectedType)
  }

  function handleClick(event){
    console.log(event)
    onFindPetsClick();
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type" onChange = {handleChange}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick = {handleClick}>Find pets</button>
      </div>
    </div>
  );
}

export default Filters;