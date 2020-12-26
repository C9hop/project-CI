

class InputWrapper extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.type = this.getAttribute("type");
    this.placeholder = this.getAttribute("placeholder");
    this.error = this.getAttribute("error") || "";
    this._shadowRoot.innerHTML = `
        <div class = "input-wrapper">
          <input id = "input-main" type = "${this.type}" placeholder = "${this.placeholder}" style="width: 200px;"></input>
          <div class = "error">${this.error}</div>
        </div>
        `;
  }
  static get observedAttributes() {
    return ["error"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "error") {
      this._shadowRoot.querySelector(".error").innerHTML = newValue;
    }
  }
  get value() {
    const value = this._shadowRoot.getElementById("input-main").value;
    return value;
  }

  //getter
}
window.customElements.define("input-wrapper", InputWrapper);
