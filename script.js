let dropdown = document.getElementById("dropup");
let first = document.getElementById("first1");
let noitem = document.getElementById("noitem");
let pop2 = document.getElementById("dropup2");
const flexbox = document.getElementById("box");
const center = document.getElementById("center");
const header = document.querySelector("header");
const header2 = document.getElementsByClassName("taskList");
let count = 0;
let start = 0;
function show() {
  count++;
  first.setAttribute("class", "first");
  let dropdown = document.getElementById("dropup");
  dropdown.setAttribute("class", " drop dropdown");
  dropdown.classList.remove("hide");
  flexbox.classList.add("first");

  if (count >= 1) {
    noitem.style.display = "none";
  }
}
const newadd = document.getElementById("Add");

const newcard = document.getElementById("cardnew");
const newcard2 = document.getElementById("cardnew2");

const back1 = document.getElementsByClassName("backbutton");

const tittle5 = document.getElementById("tasklist");
const tittle6 = document.getElementsByClassName("button1");
const blank = document.getElementsByClassName("blank");
const button4 = document.getElementsByClassName("button4");

function cardAdd() {
  count++;
  flexbox.classList.remove("first");
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
  deletebutton.classList.add("delete");
  addnewbtn.classList.add("add1");

  dropdown.classList.add("hide");
  first.classList.remove("first");

  addnewbtn.addEventListener("click", () => {
    cardnew1.style.height = "auto";
    createItempopup(itemlist_start);
  });
  deletebutton.addEventListener("click", () => {
    cardnew1.remove();
  });

  function createItempopup(itemlist_start) {
    var tittle2 = document.createElement("h3");
    itemlist_start.appendChild(tittle2);
    let body = document.querySelector("body");
    let dropdown2 = document.createElement("div");
    dropdown2.classList.add("dropdown2");
    dropdown2.style.display = "block";
    let tittle3 = document.createElement("h2");

    tittle3.innerText = "Add the  List";
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
      const p = document.createElement("p");
      p.classList.add("inline");
      tittle2.innerText = input3.value;
      dropdown2.style.display = "none";
      var markdone = document.createElement("button");
      itemlist_start.appendChild(p);
      itemlist_start.classList.add("space");
      markdone.innerText = "Done";
      p.appendChild(tittle2);
      p.appendChild(markdone);
      markdone.classList.add("mark");
      flexbox.classList.remove("first");
      markdone.addEventListener("click", () => {
        Done();
      });
      function Done() {
        tittle2.style.textDecoration = "line-through";
        tittle2.style.color = "red";
        tittle2.style.fontWeight = "bolder";
        markdone.remove();
      }
    });
    close2.addEventListener("click", () => {
      dropdown2.remove();
      console.log(flexbox.childNodes);
      // if (flexbox.innerText === " ") {
      //   noitem.style.display = "block";
      //   console.log("kuch v");
      // }
    });
  }
  tittle.addEventListener("click", () => {
    flexbox.style.display = "none";
    center.style.display = "block";
    center.appendChild(cardnew1);
    center.style.display = "flex";
    header.style.display = "block";
    tittle5.style.display = "none";
    tittle6[0].style.display = "none";
    blank[0].innerText = tittle.innerText;
    blank[0].style.color = "black";
  });
  back1[0].addEventListener("click", () => {
    backbutton();
  });
  function backbutton() {
    console.log("Hii");
    center.style.display = "none";
    center.innerText = " ";
    flexbox.appendChild(cardnew1);
    flexbox.style.display = "flex";
    flexbox.style.flexDirection = "row";
    flexbox.style.justifyContent = "space-between";
    header.style.display = "none";
    tittle5.style.display = "block";
    tittle6[0].style.display = "block";
  }
}

function closetask() {
  dropdown.setAttribute("class", "dropdown drop hide");
  first.classList.remove("first");
}

