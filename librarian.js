var library = [
  { title: "Norse Mythology", year: "2017", author: "Neil Gaiman", publisher: "W. W. Norton & Company" },
  { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" },
  { title: "Mythos: A Retelling of the Myths of Ancient Greece", year: "1981", author: "Stephen Fry", publisher: "Penguin" },
  { title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" },
  { title: "The Pragmatic Programmer", year: "1999", author: "Andy Hunt and Dave Thomas", publisher: "The Pragmatic Bookshelf	" },
  { title: "Habibi", year: "2011", author: "Thompson Craig",publisher: "Pantheon"}
];

/* Task 1 */
function getBookTitle( index ){
  console.log("Fetching the book title");
  return library[index].title;

}

console.log(getBookTitle(3));




/* Task 3 */

function addBook( book ){
  console.log("Added a new book to the library");
  library.push(book);
  return library;
}

var newBook = {title:"The Prophet", year:"1923", author:"Kahlil Gibran", publisher:"Alfred A. Knopf"}
console.log(addBook(newBook));


/* Task 4 */
function bookByAuthor(){
  library.sort(function(aName, bName){
          var a_name = aName.author.toLowerCase();
          var b_name = bName.author.toLowerCase();
          if (a_name < b_name) {return -1;}
          if (a_name > b_name) {return 1;}
          return 0;
      });
      console.log("Alphabetically sorted by  Author Name");
      return library;
  }
console.log(bookByAuthor());



/* Task 5 */
function findByTitle( title ){
  var a = [];
  for (var i = 0; i < library.length; i++) {

      searchTitle = library[i].title.toLowerCase().includes(title);
      if(searchTitle == 1){
        a.push(library[i]);
      }
    }
  console.log("Searched Titles: ");
  return a;
}

console.log(findByTitle("man"));
console.log(findByTitle("myth"));
