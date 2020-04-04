/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */

function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(newLine) 
  
}

function newLine(people){
  content.innerHTML += `<h1> ${people.name}</h1>`
  content.innerHTML += `<h2> ${people.job}</h2>` 
}
/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
  const mainHolder = document.querySelector("#content");
  const shoppingListHolder = document.createElement('ul');

  mainHolder.append(shoppingListHolder)

  shopping.forEach(addItem)

function addItem (item){
  shoppingListHolder.innerHTML +=`<li> ${item} </li>`;
}

}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  //Write your code in here
  const holder = document.querySelector("#content");
  const bookListHolder = document.createElement('ul');

  
  holder.append(bookListHolder) 
   
    //flex style
    bookListHolder.style.display = "flex";
    bookListHolder.style.flexWrap =  "wrap";
    bookListHolder.style.padding =  "10px";
    bookListHolder.style.padding.width = "calc( 100% - 41px)";
    

  books.forEach(bookColumn); //creates li using elements in the array of books

    
  function bookColumn (book){
    const bookList = document.createElement('li') //adds title and author
    bookListHolder.append(bookList)
    bookList.innerHTML  += `<p>${book.author} - ${book.title}</p>`

    const pictureBook = document.createElement('img')
    
    bookList. append(pictureBook) //adds related  picture according to title
    if(book.title == "The Design of Everyday Things" ){
      pictureBook.setAttribute('src', 'https://productimages.worldofbooks.com/0465050654.jpg')
    }else if(book.title == "The Most Human Human" ){
      pictureBook.setAttribute('src', 'https://lh3.googleusercontent.com/nWZrA2c2YGcZ7Bt6xQ7gLAt0Ccu5d-BkvXRr68OjUoIfCtfUSOoGtTQVWR8ESJwyMzZ4rqGQHlHG=s400-rw')
    }else if(book.title == "The Pragmatic Programmer"){
      pictureBook.setAttribute('src', 'https://image.ebooks.com/previews/209/209748/209748258/209748258-hq-168-80.jpg')
    }

//background to tell the book was read or not
    if ( book.alreadyRead){
      bookList.style.background = 'green'
    }else{
      bookList.style.background = 'red'
    }

  }
}



//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
