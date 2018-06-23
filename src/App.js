import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';

class App extends Component {


}

let urls = [
'/images/1.jpg',
'/images/2.jpg',
'/images/3.jpg',
'/images/4.jpg'
];

ReactDOM.render(<Gallery imageUrls={urls} />, document.getElementById("mount"));

export default App;