var upButton=document.createElement("a");upButton.innerText="",upButton.className="customUpButton",document.body.appendChild(upButton);var customArrow=document.createElement("div");customArrow.innerText="",customArrow.className="customArrow",upButton.appendChild(customArrow);var styles=`.customArrow {
    width: 0;
  height: 0;
  border: 7px solid transparent;
  border-top: 7px solid;
  border-right: 7px solid;
  margin: 43% 35%;
  transform: rotate(-45deg);  
}
.show {position: fixed;
    bottom: 80px;
    right: 40px;
    z-index: 9999;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 30px;
    background: #f5f5f5;
    color: #444;
    cursor: pointer;
    border-radius: 50%;
    display: block !important;};
.customUpButton {position: fixed;
    opacity: 0;
    display: none;}
.customUpButton::hover{ background: #e9ebec };`,styleSheet=document.createElement("style");styleSheet.type="text/css",styleSheet.innerText=".customArrow {\n    width: 0;\n  height: 0;\n  border: 7px solid transparent;\n  border-top: 7px solid;\n  border-right: 7px solid;\n  margin: 43% 35%;\n  transform: rotate(-45deg);  \n}\n.show {position: fixed;\n    bottom: 80px;\n    right: 40px;\n    z-index: 9999;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    line-height: 30px;\n    background: #f5f5f5;\n    color: #444;\n    cursor: pointer;\n    border-radius: 50%;\n    display: block !important;};\n.customUpButton {position: fixed;\n    opacity: 0;\n    display: none;}\n.customUpButton::hover{ background: #e9ebec };",document.head.appendChild(styleSheet),function(){'use strict';function a(){0<window.pageYOffset&&(window.scrollBy(0,-80),setTimeout(a,0))}var b=document.querySelector(".customUpButton");window.addEventListener("scroll",function(){var a=window.pageYOffset,b=document.documentElement.clientHeight;a>b&&(setTimeout(function(){upButton.classList.add("show"),upButton.classList.remove("customUpButton")}),300);a<b&&(upButton.classList.remove("show"),upButton.classList.add("customUpButton"))}),b.addEventListener("click",a)}();