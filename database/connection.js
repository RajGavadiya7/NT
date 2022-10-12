const { Client } = require("pg");
// const { get, add } = require("./data.js");


const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "1234",
  database: "SVNIT_Team5",
});

client.connect();

console.log(client);

module.exports = {client};


// client.end;