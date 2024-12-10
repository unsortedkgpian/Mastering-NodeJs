import { log } from "console";
import fs from "fs";

// fs.writeFileSync("./test.txt", "hey There i am making the file \n 2nd try ");

// fs.writeFile("text2.txt", "Hello world Async", (err) => {

// 	console.log(err);
// });
// it return the value
// const result = fs.readFileSync("./test.txt", "utf-8");
// console.log(result);
// const date = new Date();
// fs.appendFileSync("./test.txt", `\n${date.toLocaleString()}`);

// fs.readFile("./test.txt", "utf-8", (err, result) => {
// 	if (err) {
// 		console.log("Error", err);
// 	} else {
// 		console.log(result);
// 	}
// });

console.log(fs.statSync("./test.txt"));
