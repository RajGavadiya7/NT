var rdata = {
  product_id: "111",
  decsription: "This is very Nice product",
  rating: "5",
  user_id: "1",
};

function check_review(rdata) {
  var temp =
    'select product_id  from "review" where product_id = ' +
    rdata.product_id +
    "and" +
    "user_id = " +
    rdata.user_id;

  client.query(temp, (err, res) => {
    if (!err) {
      if (res.rows.length == 0) {
        add_review(rdata);
      } else {
        update_review(rdata);
      }

      // console.log(res.rows);
    } else {
      console.log(err.message);
    }
  });
}

function update_review(rdata) {
  var temp = 'UPDATE  "review" set ' + "rating = "+ rdata.rating + ", description = " + rdata.decsription +
                "where product_id = " + rdata.product_id + "and user_id = " +rdata.user_id ;

  client.query(temp, (err, res) => {
    if (!err) {
    //   console.log(res.rows);
    console.log(rdata + "----------Added SucsessFully-------------");
    } else {
      console.log(err.message);
    }
  });
}

//   UPDATE Customers
//   SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
//   WHERE CustomerID = 1;

function add_review(rdata) {
  var temp = 'DELETE FROM "Product"  WHERE product_id = 108 ';
  client.query(temp, (err, res) => {
    if (!err) {
      console.log(res);
    } else {
      console.log(err.message);
    }
  });
}
