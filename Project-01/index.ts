// console.log("Hello via Bun!");

import express from 'express'

const app = express();

import users from './MOCK_DATA.json'

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send("Home Page");
})
// server side rendering // SSR
app.get("/users", (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
})

app.get("/api/users", (req, res) => {
    res.json(users);
})

app.get("/api/user/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    const html = `
    <ul>
        <li>${user?.id}</li>
        <li>${user?.first_name}</li>
        <li>${user?.last_name}</li>
        <li>${user?.email}</li>
        <li>${user?.gender}</li>
        <li>${user?.job_title}</li>
    </ul>
    `
    res.send(html);
})

app.listen(PORT, () => {
    console.log(`listening at PORT: ${PORT}`);
})
