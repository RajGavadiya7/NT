const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "1234",
  database: "SVNIT_Team5",
});

client.connect();

client.query('select * from "Product" ' , (err , result) => {
  if(!err){
    console.log(result.rows);
  }
  client.end();
});

