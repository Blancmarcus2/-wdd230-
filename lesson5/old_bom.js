// const list = document.querySelector('.list');
// const input = document.querySelector('input');
// const button = document.querySelector('button');

// button.onclick = function() {
    // let myItem = input.value;
    // input.value = '';

    // const listItem = document.createElement('li');
    // const listText = document.createElement('span');
    // const listBtn = document.createElement('button');

    // listItem.appendChild(listText);
    // listText.textContent = myItem;
    // listItem.appendChild(listBtn);
    // listBtn.textContent = '❌';
    // list.appendChild(listItem);

    // listBtn.onclick = function(e) {
        // list.removeChild(listItem);
        // }
        // input.focus();
 //   }


// Start of localStorage function addition

//#region *** DOM selection **********************
const input = document.querySelector('input');
const add = document.querySelector('add');
const list = document.querySelector('ul');
const count = document.querySelector('#count');
////#endregion ***********************************

let chapterslist = [];

document.addEventListener("DOMContentLoaded", () => {
    getStoredList();
});


function setStoredList() {
    localStorage.setItem("bomchaps", JSON.stringify(chapterlist))
}

function getStoredList() {
    try {
        let chapters = JSON.parse(localStorage.getItem("bomchaps"));
        if (chapters.length > 0) {
            count.textContent = chapters.length // counter
            renderList(chapters); // build the display list
        } else {
            count.textContent = 0; // set counter to zero
        }
    }
    catch (er) {
        count.textContent = 0;
    }
}


function renderList(chapters) {
    list.innerHTML = "";
    chapters.forEach(item => {
        let li = document.createElement("li");
        let deletebutton = document.createElement("button");
        li.textContent = item.chapter;
        deletebutton.textContent = "❌";
        li.append(deletebutton);
        list.append(li);
        deletebutton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus;
        });
        input.focus();
    });
}

add.addEventListener("click", () => {
    if (input.value != "") {
        let li = document.createElement("li");
        let deletebutton = document.createElement("button");
        li.textContent = input.value;
        deletebutton.textContent = "❌";
        li.append(deletebutton);
        list.append(li);
        deletebutton.addEventListener("click", function () {
            list.removeChild(li);
            setStoredList();
            input.focus;
        });

        let entry = {
            "chapter": input.value,
            "date": new Date() // datestamp
        };

        if (count.textContent != "") {
          count.textContent = parseInt(count.textContent) + 1; // add one to the viewable count
        }
        else {
            count.textContent = 1;
        }

        // update the chapters list of item in
        chapterslist.push(input.value);
        setStoredList(); // update localStorage
        input.value = "";
        input.focus();
    }
});