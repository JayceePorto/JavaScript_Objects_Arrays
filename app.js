console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 38, 129];

function arraySum (numbers) {
    let sum = 0;

   return arr.reduce((sum, number) => {
       return sum + number;
   }, 0);
}

console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let favBook = {};

favBook.title = "Red Queen";
favBook.author = "Victoria Aveyard";
favBook.pageCount = 388;
favBook.readCount = 1;

console.log(favBook);

favBook.info = function () {
    return `${this.title} by ${this.author} is ${this.pageCount} pages and has been read ${this.readCount} times.`;
};

console.log(favBook.info());

//Exercise 3

let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence) {
    let words = sentence.split(" ");
    
    let result = words.map((word) => {
        let letters = words.split("");
        letters.reverse();
        return letters.join("");
    });
    
    return result.join(" ");
}

console.log(reverseWords(sentence));
console.log(reverseWords("My name is Jaycee"));


//Exercise 4

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConversion(data) {

    let headers = data.slice(0, data.indexOf("\n")).split(",");

    let valuesList = data.slice(data.indexOf("\n") + 1).split("\n");

    const output = valuesList.map((row) => {

        let values = row.split(",");
        let obj = {}

        values.forEach((value, idx) => {
            if (idx < headers.length) {
                obj[headers[idx]] = value;
            } else {
                obj[`misc${idx - headers.length + 1}`] = value;
            }
        });
        return obj;
    });
    return customArr;
}

console.log(csvConverter(csvData));
console.log(
    csvConverter("name,city,occupation\nJaycee,hoover,WebDeveloper,Some Value")
);