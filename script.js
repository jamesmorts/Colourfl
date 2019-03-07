function buttonClicked($element) {
  copyStringToClipboard($element.target.value);
}

var classname = document.getElementsByClassName("colourBut");
for (var i = 0; i < classname.length; i++) {
  classname[i].style.backgroundColor = classname[i].value;
  console.log(classname[i].parentNode.innerHTML);
}

$(function() {
   $('.colourBut').click(buttonClicked);
});

function copyStringToClipboard (str) {
   var el = document.createElement('textarea');
   el.value = str;
   el.setAttribute('readonly', '');
   el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el);
   el.select();
   document.execCommand('copy');
   document.body.removeChild(el);
}
