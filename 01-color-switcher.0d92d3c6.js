!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.setAttribute("disabled","true"),t.addEventListener("click",(function(r){t.setAttribute("disabled","true"),e.removeAttribute("disabled"),console.log(t),o=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(r){t.removeAttribute("disabled"),e.setAttribute("disabled","true"),console.log(e),clearInterval(o)}));var o=void 0}();
//# sourceMappingURL=01-color-switcher.0d92d3c6.js.map