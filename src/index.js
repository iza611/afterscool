import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import img_pony from './res/images/pony.png';
//import img_tunk from './res/images/tunk.jpg';
//import img_cat from './res/images/kot.jpeg';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//const images = [
//    img_pony,
//    img_tunk,
//    img_cat,
//];
//
//const taged_images = images.map(img => `<img id="image" src=${img} width="300px" />`);
//
//let x = document.getElementById("images");
//x.innerHTML = taged_images[0];

