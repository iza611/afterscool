import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    something: [],
  };
  async send(){
    console.log("START");

    let block_msg = document.getElementById('message');
    await fetch("/api")
      .then((response) => {
        if (!response.ok){
          const msg = `<b>Error</b>: ${response.status} ${response.statusText}`;
          block_msg.innerHTML = `<span style="color: var(--error-color);">${msg}</span>`;
          return {};
        }
        const type = response.headers.get("Content-Type");
        if (type.includes("json")) {
          return response.json();
        } else {
          return response.text();
        }
      })
      .then((data) => {
        console.log(data, data['message'])
        if (data['message']) {
          block_msg.innerHTML = data['message'];
        }
      })
      .catch((error) => {
        console.error("OMG ERROR:", error);
        block_msg.innerHTML = error;
      });

    console.log("END");
  }
  render(){
    return (
      <div>
      <p id='message'>My message</p>
      <input id="send_btn" type='submit' onClick={this.send} value='--> Press me <--' />
      </div>
    );
  }
}

export default App;
