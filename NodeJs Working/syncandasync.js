import fs from "fs";
import os from "os";

//Blocking
const result = fs.readFileSync("../Hello-world/test.txt", "utf-8");
console.log(result);

// Non-Blocking Code

fs.readFile("../Hello-world/test.txt", "utf-8", (err, result) => {
	try {
		console.log(result);
	} catch (err) {
		console.log(err);
	}
});

console.log(os.cpus().length);
