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

var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent = "Hello 1";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";

// items.style.backgroundColor = "gray";

for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "gray";
}
