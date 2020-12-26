const style =`
*{
    font-family: Roboto, sans-serif;
    padding: 0;
    margin: 0;
}
.header{
    /* background-color: aqua; */
    display: flex;
    justify-content: space-between;
    height: 4rem;
    padding: 0 3%;
    /* width: 100%; */
    /* align-items: center; */
}
.header-logo img{
    height: 70px;
    /* margin-bottom: 10px; */
}
.branch{
    font-size: 1.5rem;
    font-weight: 550;
    color: brown;
    margin-left: 5px;
    padding-top: 20px;

}
.header-logo, .header-action, .header-nav, .header-nav-item-1, .header-nav-item-2{
    display: flex;
}
.header-nav-item-1, .header-nav-item-2{
    cursor: pointer;
}
.header-nav-item-1 i, .header-nav-item-2 i{
    padding-top: 20px;
}
.header-nav-item-1 p, .header-nav-item-2 p{
    font-size: 1rem;
    font-weight: 550;
    padding: 20px 120px 20px 5px ;
}

.header-account{
    display: flex;
    cursor: pointer;
}
.header-account p{
    padding-left: 10px;
    padding-top: 20px;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
}
.img-account img{
    height: 40px;
    padding-top: 10px;
    /* border-radius: 4em; */
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
}
.Header-account-dropdownIcon{
    transform: rotate(90deg);
    /* padding-top: 20px; */
    padding: 20px 0;
}
.main{
    /* background-color: chartreuse; */
    display: flex;
    height: 660px;

}
.left{
    width: 30%;
    background-color: chocolate;
}
.right{
    width: 70%;
    background-color: cornflowerblue;
}
.dropdown-content{
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    /* min-width: 160px; */
    /* box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); */
    padding: 10px 16px;
    top:50px
    /* z-index: 1; */
}
.dropdown:hover .dropdown-content{
    display: block;
}
.header-nav-item-1:hover, .header-nav-item-2:hover {
    color: rgb(0, 135, 180);
}
`
class MainHeader extends HTMLElement{
    constructor(){
        super();
        this._shadowDom = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this._shadowDom.innerHTML=`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <style>
            ${style}
            </style>
            <div class="header">
        <div class="header-logo">
            <img src="./img/logo1.png" alt="Logo">
            <div class="branch">TinHer</div>
        </div>
        <div class="header-action">
            <div class="header-nav">    
                <div class="header-nav-item-1">
                    <div class="icon-font"><i class="fa fa-bomb" aria-hidden="true"></i></div>
                    <p>Explore</p>
                 </div>
                <div class="header-nav-item-2">
                    <div class="icon-font"><i class="fa fa-comments" aria-hidden="true"></i></div>
                    <p>Messenger</p>
                </div>
            </div>
            <div class="header-account dropdown"> 
                <div class="img-account"><img src="./img/avata1.jpg" alt=""></div>
                <p>C9Hop</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="Header-account-dropdownIcon"><path d="M9.42889 16.2916L13.58 12L9.44072 7.71177C9.05648 7.31331 9.06223 6.6805 9.45365 6.28908C9.80408 5.93864 10.3555 5.91168 10.7369 6.20821L10.8456 6.30667L10.8327 6.28904L12.5393 8.08412C13.1197 8.69469 13.7079 9.29789 14.3036 9.89359L15.7114 11.3014C16.0986 11.6886 16.1024 12.3152 15.7199 12.707L10.8421 17.7047C10.4914 18.0641 9.93303 18.0982 9.54301 17.8024L9.44072 17.7132C9.04948 17.322 9.04421 16.6893 9.42889 16.2916Z" fill="currentColor"></path></svg>
                <div class="dropdown-content">
                    <p>My profile</p>
                    <p>Log out</p>
                </div>
            </div>
        </div>
    </div>
        `
    }
}
window.customElements.define('main-header',MainHeader)