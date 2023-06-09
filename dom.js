// Examine the Document object
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 455;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = "Hello";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);

// GET ELEMENT BY ID
// console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// header.style.borderBottom = "solid 3px black";

// GET ELEMENT BY CLASS NAME

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 1";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// items.style.backgroundColor = "gray";

// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "gray";
// }

// Get Element by class name
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 1";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// li.style.backgroundColor = "gray";

// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "yellow";
// }

// QuerySelector
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";
// var input = document.querySelector("input");
// input.value = "Hello world";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";
// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// var SecondItem = document.querySelector(".list-group-item:nth-child(2)");
// SecondItem.style.color = "yellow";

// querySelectorAll

// var titles = document.querySelectorAll(".title");

// console.log(titles);
// titles[0].textContent = "Hello";
// var odd = document.querySelectorAll(".li:nth-child(odd)");
// var even = document.querySelectorAll(".li:nth-child(even)");

// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "#f4f4f4";
//   even[i].style.backgroundColor = "##ccc";
// }

// TRAVERSING THE DOM

//Parent Node
// var itemList = document.querySelector("#items");
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

//Parent Element
var itemList = document.querySelector("#items");
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "red";
// console.log(itemList.parentElement.parentElement.parentElement);

// ChildNode
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// FirstChild

// console.log(itemList.firstChild);

// FirstElementChild

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

// NextSibling

// console.log(itemList.nextSibling);

// NextSiblingElement

// console.log(itemList.nextElementSibling);

// previousSibling

// console.log(itemList.previousSibling);

// previousSiblingElement

// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

// create a div
var newDiv = document.createElement("div");
// Add class
newDiv.className = "hello";
// Add id
newDiv.id = "hello1";
// add attr
newDiv.setAttribute("title", "hello Div");

// create text node
var newDivText = document.createTextNode("hello world");

// add text to div
newDiv.appendChild(newDivText);
var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");
console.log(newDiv);
newDiv.style.fontSize = "36px";
container.insertBefore(newDiv, h1);
