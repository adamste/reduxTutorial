import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY='AIzaSyBKkf_JPgvhdeDK-sCQSDivaJTzr1p7y_Q';
YTSearch({key:API_KEY, term:'surfboards'}, function(data){
  console.log(data);
});
// create a new component and this component should produce some HTML
const App= () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// take this component's generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
