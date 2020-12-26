class MainScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this._shadowDom.innerHTML=`
            <main-header></main-header>
        `
    }
}
window.customElements.define('main-screen',MainScreen)