var input = document.getElementById("myInput");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("insertItem").click();
  }
});
var ul = document.createElement("ul");
function myFunction() {
  //  document.getElementById("myInput").style.color = "red";
  var input = document.getElementById("myInput").value;
  console.log("My item is: " + input);
  var textContent = document.getElementById("myInput").textContent;
  console.log("Text content: " + input);
  console.log(typeof input);
  var list = document.createElement("li");

  if (input != "") {
    var item = document.createTextNode(input);
    list.appendChild(item);
    ul.appendChild(list);
    document.getElementById("myDIV").appendChild(ul);
    document.getElementById("myInput").value = "";

    //    var delItem = document.createElement("delItem");
    //    delItem.appendChild("li");
    var btn = document.createElement("button");
    btn.innerHTML = "X";

    document.body.appendChild(btn);

    ul.onclick = function (event) {
      console.log(event.target);
      console.log(event.target.style.textDecoration);
      event.target.style.textDecoration =
        event.target.style.textDecoration == "line-through"
          ? "none"
          : "line-through";

      //      event.classList.toggle((textDecoration = "line-through"));
    };
  } else {
    alert("Please enter a value");
  }
}

function delItem(li) {}
