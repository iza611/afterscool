import React from 'react';
import './App.css';

class Message{
    constructor(author, data){
        this.author = author;
        this.data = data;
    }
}


function App() {
    var states = {
        messages: [],
    };

    function send(){
        let text = document.getElementById('msg_input');
        let value = text.value;
        states.messages.push(new Message("ItsMeMario", value));
        text.value = ''; // clear the input tag
        updateMessages();
    }
    function updateMessages(){
        let div = document.getElementById('messages');
        let last_index = states.messages.length - 1;
        let msg = states.messages[last_index];
        div.innerHTML += `<p><b>${msg.author}:</b> ${msg.data}</p>`;
    }

    return (
    <React.Fragment>
        <div id="messages">
        </div>

        <div id="inputs">
            <input id='msg_input' type='text' />
            <input type='submit' value='send' onClick={send}/>
        </div>
    </React.Fragment>
    );
}

export default App;
