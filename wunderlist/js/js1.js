










//creating the close buttons for lists that are not created with the main functions

var myList = document.getElementByTagName("LI");
var index;

for(index = 0; index < myList.length; index++){
  var aSpanTag = document.createElement("SPAN");
  var someTxt = document.createTextNode("\u00D7");
  aSpanTag.className = "close";
  aSpanTag.appendChild(sometxt);
  myList[index].appendChild(aSpanTag);
}

//CLOSE BUTTON
var closeButton = document.getElementByClassName("close");
 var i;
for(i = 0; i < closeButton.length; i++){
    closeButton[i].onclick =function(){
      var div = this.parentElement;
      div.style.display = "none";

    }
  }


//CREATING TODOS LIST FUNCTION
function createNewElement(){
  var li = document.createElement("li");
  var theInputValue =document.getElementById("the-input").value;
  var textNode = document.createTextNode(theInputValue);
  li.appendChild(textNode);
 
  if (theInputValue === '') {
    alert("Hey this cannot be empty")
  }else{
    document.getElementById("uls").appendChild(li);
  }

  document.getElementById("the-input").value = "";

  var thePanTag = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  thePanTag.className = "close";
  thePanTag.appendChild(txt);
  li.appendChild(thePanTag);

  // Removing item when click on SPAN CLOSE BUTTON
  for(i = 0; i < closeButton.length; i++){
    closeButton[i].onclick =function(){
      var theDiv = this.parentElement;
      theDiv.style.display = "none";

    }
  }

}

//add checked symbol when clicking on a list item

var list = document.querySelector('ul');
 list.addEventListener('click', function(event){
  if(event.target.tagName === 'LI'){
    event.target.classList.toggle('checked');
  }
},false);

