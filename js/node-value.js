var itemTwo = document.getElementById('two');

var elText = itemTwo.firstChild.nodeValue;
elText = elText.replace('orzeszki piniowe', 'kapusta');

itemTwo.firstChild.nodeValue = elText;