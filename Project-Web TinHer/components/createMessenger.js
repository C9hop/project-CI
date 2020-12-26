const style =`
.h{
    height: 50px;
    background-color: aqua;
    display: flex;
    /* justify-content: center; */
    justify-content: space-between;
    /* padding: 0 5%; */
}
.fa-times{
    padding: 20px;
    /* width: 100%; */
}
.fa-ellipsis-h{
    padding: 20px;
}
.m {
    display: block;
    height: calc(100% - 100px);
    /* height: 60px; */
    /* background-color: chartreuse; */
    overflow-y: auto;
}

.m > div {
    margin-bottom: 50px;
}

.f{
    height: 50px;
    background-color: brown;
}
.f1{
    display: flex;
    align-items: center;
}
#textarea{
    width: 970px;
    height: 45px;
    margin: 0;
    border-radius: 2rem;
}
.k{
    display: flex;
}
.main{
    /* background-color: chartreuse; */
    display: flex;
    height: 660px;

}
.icon-close{

}
.img-user img{
    height: 40px;
    padding-top: 5px;
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
}
/* .img-user{
    padding-bottom: 40px;
} */
.left{
    width: 25%;
    background-color: chocolate;
}
.right{
    width: 75%;
    background-color: cornflowerblue;
}
`
class CreateMessenger extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this._shadowDom.innerHTML=`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <style>
                ${style}
            </style>
            <div class="main">
            <div class="left">aaaa</div>
            <div class="right">
                <div class="h">
                    <div class="k">
                        <div class="icon-close"><i class="fa fa-times" aria-hidden="true"></i></div>
                        <div class="img-user"><img src="./img/avata1.jpg" alt=""></div>
                    </div>
                    <div><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                </div>
                <div class="m">
                    <div><img src="./img/avata.jpg" alt=""></div>
                    <div><img src="./img/avata.jpg" alt=""></div>
                    <div><img src="./img/avata.jpg" alt=""></div>
                    <div><img src="./img/avata.jpg" alt=""></div>
                    <div><img src="./img/avata.jpg" alt=""></div>
                    <div><img src="./img/avata.jpg" alt=""></div>
                    <div><img src="./img/avata.jpg" alt=""></div>
                </div>
                <div class="f">
                    <div class="f1">
                    <textarea name="" id="textarea" cols="30" rows="1"></textarea>
                    <p>Send</p>
                    </div>
                </div>
                
            </div>
        </div>
        `
    }
}
window.customElements.define('create-messenger',CreateMessenger)