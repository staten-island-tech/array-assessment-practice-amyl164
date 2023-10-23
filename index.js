const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
books.forEach((book)=> console.log(`${book.authorFirst} wrote ${book.name} in ${book.publishDate}` ));
//Sort books from oldest to most recent
const age = books.sort(function(a,b){
  return a.publishDate - b.publishDate;
});
console.log(age);

//sort books alphabetically
const title = titles.sort(function(title1, title2){
  const nameA = title1.toUpperCase();
  const nameB = title2.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
});
console.log(title);
//Find who wrote War and Peace
const WarandPeace = books.find((title) => title.name === "War and Peace");
console.log(`${WarandPeace.authorFirst} ${WarandPeace.authorLast} wrote thjis stupid book`);
//how many books were written before 1900?
const howMany = books.filter((before) => before.publishDate<1900);
console.log(howMany.length);
//was there at least one book published within the last 100 years?
if (books.every((within)=> new Date().getFullYear() - within.publishDate <=100))
{
  console.log("true");
}
else{
  console.log("false");
}
//was every book published within the last 100 years?
if (books.every((within)=> new Date().getFullYear() - within.publishDate <=100))
{
  console.log("true");
}
else{
  console.log("false");
}
//print a list of books that "includes" the genre historical
books.filter((genre)=> genre.genre.includes("historical")).forEach((book)=> {
  console.log(book.name);
});