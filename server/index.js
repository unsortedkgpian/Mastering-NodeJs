import { log } from "console";
import http from "http";
import fs from "fs";
import url from "url";

const myServer = http.createServer((req, res) => {
	// console.log("reqest header :", req.headers);
	const date = new Date();
	const user = "user-agent";
	const plat = "sec-ch-ua";
	const myUrl = url.parse(req.url, true);
	console.log("myUrl:", myUrl);

	fs.appendFileSync(
		"./log.txt",
		`${date.toLocaleTimeString()} ${req.headers?.[plat]} \n ${req.url}\n`
	);
	switch (req.url) {
		case "/":
			res.end("Home page");
			break;
		case "/about":
			res.end("about");
			break;
		default:
			res.end(`${req.url}`);
			break;
	}
});

myServer.listen(8000, () => console.log("Severe is listing at Port: 8000"));
