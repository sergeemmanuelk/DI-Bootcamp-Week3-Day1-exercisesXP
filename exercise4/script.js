// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>

// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

let allBooks = [

    // Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
    {
        title : "Think And Grow Rich",
        author : "Napoleon Hill",
        image : "https://m.media-amazon.com/images/I/71UypkUjStL.jpg",
        alreadyRead : true
    },
    {
        title : "The Seven Habits Of Effective People",
        author : "Stephen R. Covey",
        image : "https://m.media-amazon.com/images/I/810oMMWrltL.jpg",
        alreadyRead : false
    }
]


// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
let listOfBooks = document.querySelector(".listBooks")
let elementTable = document.createElement("table")

//For each book :
for (let listItem in allBooks) {
    let tableRow = document.createElement("tr")
    let book = allBooks[listItem]

    // You have to display the book’s title and the book’s author
    let titleOfTheBookTd = document.createElement("td")
    titleOfTheBookTd.textContent = book.title + " written by " + book.author
    //titleOfTheBookTd.textContent = `${book.title} written by ${book.author}`

    // The width of the image has to be set to 100px
    let imageOfTheBookTd = document.createElement("td")
    let image = document.createElement("img")
    image.src = book.image
    image.style.width = "100px"
    imageOfTheBookTd.appendChild(image)

    tableRow.appendChild(titleOfTheBookTd)
    tableRow.appendChild(imageOfTheBookTd)

    // If the book is already read. Set the color of the book’s details to red
    if (book.alreadyRead) {
        titleOfTheBookTd.style.color = "red";
    }
  
    elementTable.appendChild(tableRow)
}

listOfBooks.appendChild(elementTable)
