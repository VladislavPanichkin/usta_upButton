var upButton = document.createElement("a");
upButton.innerText = "";
upButton.className = "customUpButton";
document.body.appendChild(upButton);
var customArrow = document.createElement("div");
customArrow.innerText = "";
customArrow.className = "customArrow";
upButton.appendChild(customArrow);

var styles = `
.customArrow {
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
.customUpButton::hover{ background: #e9ebec };`;

var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet);

(function() {
    'use strict';

    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;
        if (scrolled > coords) {
            setTimeout(function() {
                upButton.classList.add('show');
                upButton.classList.remove('customUpButton');
            }), 300
        };
        if (scrolled < coords) {
            upButton.classList.remove('show');
            upButton.classList.add('customUpButton')
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }
    var goTopBtn = document.querySelector('.customUpButton');
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();