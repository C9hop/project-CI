import "./screens/register.js";
import "./screens/login.js"
import "./screens/main.js"
import "./utils.js"
import "./components/inputWrapper.js"
import "./components/header.js"
import "./components/createMessenger.js"



redirect("register");
export function redirect(screenName) {
  if (screenName === "register") {
    document.getElementById("app").innerHTML = `
      <register-screen></register-screen>
  `
} 
  else if (screenName === "login") {
    document.getElementById("app").innerHTML = `
      <login-screen></login-screen>
  `
  }
  else if (screenName ==="main") {
    document.getElementById('app').innerHTML =`
     <main-screen></main-screen>
    `
  }
}