
// add book & delete book
function addBook(bookname, readStatus = "deactive" ) {
    // Function addBook has 2 attribute: bookname, and readStatus (active/ deactive)

    // Create an row, named bookRow
    const bookRow = document.createElement('div');
    bookRow.className = "bookRow";

    // Create a book Item, named bookItem
    const bookItem = document.createElement('div');
    const bookClassName = "bookItem" + " " + readStatus; // pass class for bookItem: bookItem + active/deactive
    bookItem.className = bookClassName;
    bookItem.innerHTML = bookname;
        // Click to active/ deactive
    bookItem.addEventListener("click", function() {
        if (this.className === "bookItem active") {
            this.className = "bookItem deactive"
        } else {
            this.className = "bookItem active"
        }
    })

    // Create a button
    const bookItemDeleteBtn = document.createElement('button');
    bookItemDeleteBtn.className = 'bookItem-del-btn';
    bookItemDeleteBtn.innerHTML = "Delete";
        // Function Deletebook
    bookItemDeleteBtn.onclick = function(){
        // delete  book
        this.parentNode.remove();
    };
    
    bookRow.appendChild(bookItem);
    bookRow.appendChild(bookItemDeleteBtn);
    document.getElementById("bookList").appendChild(bookRow);
}


// add book from form
var form1 = document.getElementById('myForm');
form1.addEventListener("submit",function() {
    addBook(form1.elements[0].value);
    event.preventDefault();
})


// load book
var preLoadBook = data;

function loadBook() {
    for (let i = 0; i < preLoadBook.length; i++ ) {
        const x = preLoadBook[i]["name"];
        var y = "";
        if (preLoadBook[i]["completed"] === false) {
            y = 'deactive'
        } else {
            y = 'active'
        }
        addBook(x, y);
    };
}

loadBook();

// deactive book


// check subString
// using string.includes  . Notice that, this is case sensitive

const divs = document.querySelectorAll("div.bookRow");
for (let i = 0; i < divs.length; i++) {
    const str1 = divs[i].childNodes[0].innerHTML;
}


// seach book
    // Get data from form
    var form2 = document.getElementById("searchForm");
    form2.addEventListener('submit', function() {
        // event.preventDefault();

        const input = form2.elements[0].value.toLowerCase();  //get input value from seach bar
        const divs = document.querySelectorAll("div.bookRow"); // select for div has class name bookRow
        for (let i = 0; i < divs.length; i++) {
            const str1 = divs[i].childNodes[0].innerHTML.toLowerCase(); // get input value from book list, lower case that
            const subStrCheck = str1.includes(input); // check if any book list contain value from search bar
            if (subStrCheck === false) {
                divs[i].style.display = 'none'
            }
        }
        event.preventDefault();
    })