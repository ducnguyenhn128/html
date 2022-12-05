
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
