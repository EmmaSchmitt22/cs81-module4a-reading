//Emma Schmitt
//URL to GitHub Repo: https://github.com/EmmaSchmitt22/cs81-module4a-reading

// Weekly reading log
const readingLog = [ ////A log of the user's reading data
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log: Takes user entry, adds it to readinglog
function addReadBook(day, book, minutes) {//Takes 3 parameters
  const newEntry = { day, book, minutes }; //Maps 3 parameters sequentially to "day" "book" "minutes"
  readingLog.push(newEntry);
}

// Returns total minutes spent reading all week: Accepts a log entry, returns cumulative time read
function totalReadingMinutes(log) {
  let total = 0;
  for (let entry of log) { //Loops through all entries
    total += entry.minutes; //for each lop, adds on the next log's minute count
  }
  return total;
}

// Returns the book read most frequently: Accepts a log entry, returns single most read book
function mostReadBook(log) {
  const bookCounts = {}; //Creates empty object to store book counts as they are generated
  for (let entry of log) {
    if (!bookCounts[entry.book]) { //If the book isn't already entered in count, add it with count "1"
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++; //If the book is already in the cont log, increment it by 1
    }
  }
  //SUGGESTION ADDED HERE: The sort array method could be implemented, to sort the data numerically and then
  //grab the highest value.
  let maxBook = null; //Determines which book count is the highest (from the data generated above)
  let maxCount = 0;
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook; //Returns book with highest count
}

// Prints a summary of minutes read per day
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50);
addReadBook("Sunday", "The Road", 120); //Added final entry of the week
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));
