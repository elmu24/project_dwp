import React, { useState } from 'react';
import axios from 'axios';
import './OpenData.css';

function App() {
  const [category, setCategory] = useState(''); 
  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState('');

  const searchCocktailsByCategory = async () => {
    // Check if default category is selected
    if (category === '') {
      setError('Please select a category');
      setCocktails([]);
      return;
    }

    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`); 
      if (response.data.drinks) {
        setCocktails(response.data.drinks);
        setError('');
      } else {
        setError('No cocktails found in this category');
        setCocktails([]);
      }
    } catch (error) {
      setError('There was a problem fetching data.');
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="app">
      <div className="header-image-container">
        <img src="https://picsum.photos/1600/300" alt="some random picture" className="header-image" />
      </div>


      <Header /> 
      <CategorySelector 
        category={category} 
        setCategory={setCategory} 
        searchCocktailsByCategory={searchCocktailsByCategory} 
      /> 
      
      {error && <p className="error">{error}</p>}
      
      <Cocktaillist cocktails={cocktails} />
    </div>
  );
}

/*Header Component with text*/
function Header() {
  return (
    <div className="text-container">
      <h1>Cocktail Finder</h1>
      <hr />
      <h2>Find the perfect cocktail for your cocktailnight!</h2>
    </div>
  );
}

/*Search for category*/
function CategorySelector({ category, setCategory, searchCocktailsByCategory }) {
  return (
    <div className="category-container">
      <label htmlFor="category">Choose a category:</label>
      <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option> {/* Default option and category for error message */}
        <option value="Ordinary Drink">ordinary</option>
        <option value="Cocoa">cocoa</option>
        <option value="Shot">shot</option>
        <option value="Coffee / Tea">coffee & tea</option>
      </select>
      <button onClick={searchCocktailsByCategory}>Search</button>
    </div>
  );
}

/* Component */
function Cocktaillist({ cocktails }) { /*prop named cocktails(array) is needed*/
  return (
    <div className="cocktails-list">
      {cocktails.map((cocktail) => ( /* Iteration for every cocktail*/
        <div key={cocktail.idDrink} /* Index for each cocktail*/
        className="cocktail-item"> 
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}  /> 
          <h3>{cocktail.strDrink}</h3 > 
          {/* Image and title of cocktail as well as alternative text*/}
        </div> 
      ))}
    </div>
  );
}

export default App;