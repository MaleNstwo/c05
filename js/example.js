var list = document.getElementsByTagName('ul')[0];

var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('krem');
newItemLast.appendChild(newTextLast);

list.appendChild(newItemLast);

var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('kapusta');
newItemFirst.appendChild(newTextFirst);

list.insertBefore(newItemFirst, list.firstChild);


var listItems = document.querySelectorAll('li');

var i;

for (i = 0; i < listItems.length; i++) {
    listItems[i].className = 'cool';
}

var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<br> ' + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;