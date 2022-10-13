const { Client } = require('pg');


const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "1234",
  database: "SVNIT_Team5",
});

execute();

async function execute(){

  await client.connect();
  console.log("connected Successfully");
  const result  = await client.query('select * from "Product" ');
  console.log(result.rows);

  module.exports =  result.rows;

}


// module.exports = {product_data} ;





