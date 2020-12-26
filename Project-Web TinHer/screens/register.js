import "../utils.js";
import {redirect} from "../index.js"

const style = `
.register-container {
    width: 100vw;
    height: 100vh;
    // background: url("https://images.alphacoders.com/437/thumb-1920-437881.jpg");
    background-color: pink;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
}
// #register-form {
//     width: 30vw;
//     height: 100vh;
//   }
.header {
  width: 100%;
  height: 10%;
  display: flex;
  // border: 1px solid black;
  justify-content: space-between;
}
.row {
  width: 96%;
}

.header1 {
  height: 10%
  border: 1px solid black;
  display:flex;
  align-items: center;
}

.btn:hover {
  background-color: #ff8585;
}
.btn1{
  border-radius: 5px;
  width: 120px;
  height: 50%;
  font-weight: bold;
  font-family: 'Titillium Web', sans-serif;
}
.btn2 {
  border-radius: 80px;
  width: 220px;
  height: 80%;
  font-weight: bold;
  font-family: 'Titillium Web', sans-serif;
}
.main {
  height: 90%;
  // border: 1px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 50px;
}
`

class RegisterSceen extends HTMLElement{
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({mode: 'open'})
  }
  connectedCallback() {
    this._shadowRoot.innerHTML = `
        <style>
          ${style}
        </style>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200&display=swap" rel="stylesheet">
        <div class = "register-container"> 
          <div class="header row">
            <h1 style="font-size: 35px;font-family: 'JetBrains Mono', monospace;"><i class="fa fa-venus-mars" aria-hidden="true"></i>tinher</h1>
            <div class="header1">
              <button class="btn btn1" id="redirect" style="font-family: 'JetBrains Mono', monospace;">SIGN-IN</button>
            </div>
          </div>

          <div class="main row">
            <h1 style="font-size: 130px; margin: 0; font-family: 'JetBrains Mono', monospace;";>Swipe Right</h1>
            <div>
              <button class="btn btn2" style="letter-spacing: 1px;font-size: 20px;font-family: 'JetBrains Mono', monospace;" >REGISTER</button>
            </div>
        </div>
        `;
    this._shadowRoot.getElementById('redirect')
    .addEventListener('click', () => {
      redirect('login')
    })
  }
}
window.customElements.define('register-screen', RegisterSceen)