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

// console.log(client);

// module.exports = {client};

function average_rating(product_id) {
  var str =
    'select avg(rating) from "Product" where product_id = ' + product_id;
  client.query(str, (err, res) => {
    if (!err) {
      console.log("Average Rating :- " + res.rows);
    } else {
      console.log(err.message);
    }
  });
}

// client.end;
