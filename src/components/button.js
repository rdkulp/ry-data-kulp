import React from 'react';

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a class="button" href="#" onClick={handleClick}>
      See All
    </a>
  );
}

export default ActionLink;
