 // GETELEMENTID
// console.log(document.getElementById('header-title'));
// var headerTitle = documents.getElementById('header-title');
// var header = documents.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px =000';

// GETELEMENTBYCLASSNAME

var item = documents.getElementsByclassName("list-group-item");
console.log(item);
console.log(item[1]);
item[1].textcontent = "Hello 2";
item[1].style.fontweight = 'bold';
item[1].style.backgroundcolor = 'yellow';

// GetELEMENTTAGNAME
var li = documents.getElementsByTagName("list-group-item");
console.log(li);
console.log(li[1]);
li[1].textcontent = "Hello 2";
li[1].style.fontweight = 'bold';
li[1].style.backgroundcolor = 'yellow';
for(var i=0; i< li.length; i++){
  li[1].style.backgroundcolor = '#f4f4f4';
}


QUERYSELECTOR
var header = document.queySelector('main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value ='Hello World'

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND"
var item = document.querySelctor('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector
('.list-group-item.last-child');
lastitem.style.color = 'blue';


var secondItem document.querySelctor
('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';
//QUERYSELECTRALL 
var titles = document.querySelectorAll('.title');

console.log(title);
titles[0].textContent = 'Hello';







