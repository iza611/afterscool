import React from 'react';
import './App.css';

import img_pony from './res/images/pony.png';
import img_tunk from './res/images/tunk.jpg';
import img_cat from './res/images/kot.jpeg';

const images = [
    img_pony,
    img_tunk,
    img_cat,
];

const taged_images = images.map(img => `<img id="image" src=${img} width="300px" />`);

function App() {
function display_img(index){
    console.log(index);
    let x = document.getElementById("images");
    if (x === null){
        console.log("ERROR x is null");
        return
    }
    x.innerHTML = taged_images[index];
}
return (
    <div className="App">
        <div id="buttons">
            <input type="button" value="DESTROY ANIMALS!!" onClick={() => display_img(0)}/>
            <br/>
            <input type="button" value="tUR tUR" onClick={() => display_img(1)} />
            <br/>
            <input type="button" value="Saszetkaaaaa :D" onClick={() => display_img(2)} />
        </div>
        
        <div id="images">
            
        </div>
    </div>
);
}

export default App;
