 //Create a "close" button and append it to each list item
var mylist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < mylist.length; i++) {
  var myspan = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  mylist[i].appendChild(myspan);
}

// Click on a close button to hide the current list item
var closeButton = document.getElementsByClassName("close");
var i;
for (i = 0; i < closeButton.length; i++) {
  closeButton[i].onclick = function() {
    var theDiv = this.parentElement;
  theDiv.style.display = "none";
  }
}
	
// Add a "checked" symbol when clicking on a list item
var ulList = document.querySelector('ul');
ulList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var sometxt = document.createTextNode(inputValue);
  li.appendChild(sometxt);
  if (inputValue === '') {
    alert("write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}