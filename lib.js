var instances = [];
var bookCount = instances.length
class Book {
    constructor(name, author, pages, read){
        this.name = name
        this.author = author
        this.pages = pages.toString()
        this.read = read ? "Completed" : "Not read yet"
        instances.push(this)
    }
}

var booksContainer = document.querySelector(".books-container")

var promptDiv = document.querySelector(".prompt-div");
var promptName = document.querySelector(".prompt-name")
var promptAuthor = document.querySelector(".prompt-author")
var promptPages = document.querySelector(".prompt-pages")
var promptRead = document.querySelector(".prompt-read")


function createBook(name, author, pages, read){
    
    const bookProperties = ['name', 'author', 'pages', 'read']
    new Book(name,author,pages,read)
    var currentBook = instances[instances.length - 1]
    var bookBoxDelete = document.createElement("button")
    bookBoxDelete.className = "delete-tag"
    bookBoxDelete.onclick = removeBook
    bookBoxDelete.innerText = "x"

    var bookBox = document.createElement("div")
    bookBox.appendChild(bookBoxDelete)
    bookBox.className = "book-box"

    for (let i = 0; i < 4; i++){
        
        var bookPropertyTag = document.createElement("p")
        bookPropertyTag.className = "book-property-tag"
        bookPropertyTag.innerText = currentBook[bookProperties[i]]
        bookBox.appendChild(bookPropertyTag)
    }
    booksContainer.appendChild(bookBox)
    

}

function removeBook(){

    booksContainer.removeChild(this.parentNode)
    console.log("fs")
}

function newBookPrompt(){
    

    const prompt = document.createElement("div")
    bookName = promptName.value
    author = promptAuthor.value
    pages = promptPages.value
    read = promptRead.checked
    if ([bookName, author, pages].some((i) => {return i == ''})){

        alert("Please fill all the fields.")
    }
    else {

        createBook(bookName, author, pages, read)
        hidePrompt()

    }
}

function hidePrompt(){
    
    promptName.value = ''
    promptAuthor.value = ''
    promptPages.value = ''
    promptRead.checked = ''
    promptDiv.style.display = "none";
}

function showPrompt(){
    promptDiv.style.display = "flex";
}

