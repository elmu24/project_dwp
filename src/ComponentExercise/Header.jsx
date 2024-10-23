import React from 'react';

function Header({ title, image, altText }) { /*title, image, alternative text as probs*/
  return (
    <header className="header-container">
      <img src={image} alt={altText} className="header-image" />
      <h1>{title}</h1>
    </header>
  );
}

export default Header;