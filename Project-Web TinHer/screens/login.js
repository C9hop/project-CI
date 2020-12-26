const style = `
.login-container {
    width: 100vw;
    height: 100vh;
    background-color: pink;
    // background-image: url("https://s.abcnews.com/images/Health/couple-bed-stock-gty-jef-181214_hpMain_16x9_1600.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}
#login-form {
    border: 3px solid grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 450px;
    padding: 20px;
    background-color: grey;
    opacity: 0.85;
    filter: alpha(opacity=90); 
    border-radius: 5px;
  }
  #login-form input {
    width: 300px
  }

h1 {
    text-align: center;
    // color: #808080;
    font-family: 'Nunito', sans-serif
  }

button {
  background: #fff;
  color: black;
 }

button:hover {
  background-color: #ff8585;
 }
a:hover {
  font-weight: bold;
  color: black;
}
.btn1 {
  border-radius: 5px;
  width: 120px;
  height: 50%;
  font-weight: bold;
  font-size: 20px;
  font-family: 'Titillium Web', sans-serif;
 }
}
`;

import { getDataFromDocs, saveToLocalStorage } from "../utils.js";
import {redirect} from "../index.js"

class loginScreen extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this._shadowRoot.innerHTML = `
        <style>
          ${style}
        </style>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200&display=swap" rel="stylesheet">
        <div class = "login-container">
            <form id = "login-form">
              <h1 style="font-family: 'JetBrains Mono', monospace; font-size: 50px">SIGN-IN</h1>
              <input-wrapper id = "email" type = "text" placeholder = "Email" style="padding:10px;"></input-wrapper>
              <input-wrapper id = "password" type = "password" placeholder = "Password"></input-wrapper>
              <div style="height: 20%; padding: 10px;">
                <button class="btn1" style="font-family: 'JetBrains Mono', monospace;">Login</button>
              </div>
              <a id = "redirect" style="font-family: 'JetBrains Mono', monospace; font-size: 20px">Don't have an account? Register!</a>
            </form>
        </div>
        `;
    const loginForm = this._shadowRoot.getElementById("login-form");
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = this._shadowRoot.getElementById("email").value;
      const password = this._shadowRoot.getElementById("password").value;
      let isValid = true;
      if (email.trim() === "") {
        isValid = false;
        this.setError("email", "Please input email");
      }
      if (password.trim() === "") {
        isValid = false;
        this.setError("password", "Please input password");
      }
      if (!isValid) {
        return;
      }

      const user = await firebase
        .firestore()
        .collection("users")
        .where("email", "==", email)
        .where("password", "==", CryptoJS.MD5(password).toString())
        .get();
      if (user.empty) {
        alert("Sai email /password");
      } else {
        saveToLocalStorage("currentUser", getDataFromDocs(user)[0]);
        redirect("main");
        // console.log(getDataFromDocs(user)[0]);
      }
    });
    this._shadowRoot
      .getElementById("redirect")
      .addEventListener("click", () => {
        redirect("register");
      });
  }

  setError(id, message) {
    this._shadowRoot.getElementById(id).setAttribute("error", message);
  }
  async checkEmailExist(email) {
    const res = await firebase
      .firestore()
      .collection("users")
      .where("email", "==", email)
      .get();
    return !res.empty;
  }
}
window.customElements.define("login-screen", loginScreen);
