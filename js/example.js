var list = document.getElementsByTagName('ul')[0];
// ADD NEW ITEM TO END OF LIST

var endItem= document.createElement('li');
var textInLast = document.createTextNode('cream') ;
endItem.appendChild(textInLast);
list.appendChild(endItem);

// ADD NEW ITEM START OF LIST
var firstInList= document.createElement('li');
var textInFirst= document.createTextNode('kale');
firstInList.appendChild(textInFirst);
list.insertBefore(firstInList, list.firstChild);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
var i;
var items = document.querySelectorAll('li');
for(i = 0; i < items.length; i++) {
  items[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var header = document.querySelector('h2');
var headerText= header.firstChild.nodeValue;
var totalItems = items.length;
var newHeader = headerText + '<span>'  + totalItems + '</span>';
header.innerHTML = newHeader;
