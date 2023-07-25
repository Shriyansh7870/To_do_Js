let dropdown = document.getElementById("dropup");
let first = document.getElementById("first1");
let noitem = document.getElementById("noitem");
let pop2 = document.getElementById("dropup2");
let count = 0;
let start = 0;
function show() {
  count++;
  first.setAttribute("class", "first");
  let dropdown = document.getElementById("dropup");
  dropdown.setAttribute("class", " drop dropdown");
  dropdown.classList.remove("hide");
  if (count >= 1) {
    noitem.remove();
  }
}

const flexbox = document.getElementById("box");
const newcard = document.getElementById("cardnew");
const newcard2 = document.getElementById("cardnew2");

function cardAdd() {
  // start++;
  var cardnew1 = document.createElement("div");
  var tittle = document.createElement("h2");
  tittle.style.marginLeft = "40%";
  var heading = document.createElement("hr");
  var itemlist_start = document.createElement("div");
  // var tittle2 = document.createElement("h3");
  var deletebutton = document.createElement("button");
  deletebutton.classList.add("btn3");
  var addnewbtn = document.createElement("button");
  addnewbtn.classList.add("btn4");

  console.log(start);
  cardnew1.setAttribute("id", start);
  cardnew1.appendChild(tittle);
  cardnew1.appendChild(heading);
  cardnew1.appendChild(itemlist_start);
  // itemlist_start.appendChild(tittle2);
  cardnew1.appendChild(deletebutton);
  cardnew1.appendChild(addnewbtn);
  flexbox.appendChild(cardnew1);

  cardnew1.classList.add("conatiner_child");
  tittle.innerText = newcard.value;
  deletebutton.innerText = "delete";
  addnewbtn.innerText = "Add";

  dropdown.classList.add("hide");
  first.classList.remove("first");

  addnewbtn.addEventListener("click", () => {
    // pop2.style.display = "block";
    cardnew1.style.height = "auto";
    //pass the div itemlist_start to add function
    createItempopup(itemlist_start);
  });
  deletebutton.addEventListener("click", () => {
    cardnew1.remove();
  });
  function createItempopup(itemlist_start) {
    var tittle2 = document.createElement("h3"); // inner text in card which is click
    itemlist_start.appendChild(tittle2);
    let body = document.querySelector("body");
    let dropdown2 = document.createElement("div");
    dropdown2.classList.add("dropdown2");
    dropdown2.style.display = "block";
    let tittle3 = document.createElement("h2");

    tittle3.innerText = "Add the  List"; // card name second
    let input3 = document.createElement("input");
    input3.setAttribute("id", "cardnew2");
    tittle2.innerText = input3.value;
    let Add2 = document.createElement("button");
    Add2.classList.add("Add2");
    Add2.innerText = "Add";

    let close2 = document.createElement("button");
    close2.classList.add("close2");
    close2.innerText = "close";

    body.appendChild(dropdown2);
    dropdown2.appendChild(tittle3);
    dropdown2.appendChild(input3);
    dropdown2.appendChild(Add2);
    dropdown2.appendChild(close2);

    Add2.addEventListener("click", () => {
      tittle2.innerText = input3.value; //  item store in conatiner from input of popup box
      dropdown2.style.display = "none";
      var markdone = document.createElement("button");
      itemlist_start.append(markdone);
      markdone.innerText = "X";
      markdone.style.marginLeft = "10px";
      markdone.classList.add("inline");
    });
    close2.addEventListener("click", () => {
      dropdown2.remove();
    });
  }
  tittle.addEventListener("click", () => {
    AddnewPage(cardnew1);
  });
  function AddnewPage(cardnew1) {
    flexbox.display = "none";
    cardnew1.style.display = "block";
  }
}

function closetask() {
  dropdown.setAttribute("class", "dropdown drop hide");
  first.classList.remove("first");
}
