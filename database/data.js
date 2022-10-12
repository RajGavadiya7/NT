const { client } = require("./connection.js");

// console.log(client);

var str = 'select * from "Product"';

console.log(str + "-----------------All brain fuck starts here ---------------------");

function delete_review() {
  var temp = 'DELETE FROM "Product"  WHERE product_id = 107 ';
  client.query(temp, (err, res) => {
    if (!err) {
      console.log(res);
    } else {
      console.log(err.message);
    }
  });
}



var rdata = {
  product_id: "111",
  decsription: "This is very Nice product",
  rating: "5",
  user_id: "1",
};



function check_review(rdata) {
  var temp =
    'select product_id  from "review" where product_id = ' + rdata.product_id + "and" +
    "user_id = " + rdata.user_id;

  client.query(temp, (err, res) => {
    if (!err) {
        if(res.rows.length == 0){
            add_review(rdata);
        }
        else{
            delete_review(rdata);
            update_review(rdata);
        }
      console.log(res.rows);
    } else {
      console.log(err.message);
    }
  });
}

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

// delete_review() ;

// function get(x, client) {
//     var a1 = " '" + x.state + "' ";
//     var a2 = " '" + x.district + "' ";
//     var a3 = " '" + x.commodity + "' ";
//     var a4 = " '" + x.variety + "' ";
//     var a5 = " '" + x.arrival_date + "' ";
//     var a6 = " '" + x.min_price + "' ";
//     var a7 = " '" + x.max_price + "' ";
//     var a8 = " '" + x.modal_price + "' ";

//     var where = false;
//     var str = "select * from test  ";

//     if (x.state != "") {
//       if (where == false) {
//         str = str + " where";
//         where = true;
//       }
//       str = str + "  state = " + a1 + " and";
//     }

//     if (x.district != "") {
//       if (where == false) {
//         str = str + "where";
//         where = true;
//       }
//       str = str + "  district = " + a2 + " and";
//     }

//     if (x.commodity != "") {
//       if (where == false) {
//         str = str + "where";
//         where = true;
//       }
//       str = str + "  commodity = " + a3 + " and";
//     }

//     if (x.variety != "") {
//       if (where == false) {
//         str = str + "where";
//         where = true;
//       }
//       str = str + "  variety = " + a4 + " and";
//     }

//     if (x.arrival_date != "") {
//       if (where == false) {
//         str = str + "where";
//       }
//       str = str + "  arrival_date = " + a5 + " and";
//     }

//     if (x.min_price != "") {
//       if (where == false) {
//         str = str + "where";
//       }
//       str = str + "  min_price = " + a6 + " and";
//     }

//     if (x.max_price != "") {
//       if (where == false) {
//         str = str + "where";
//       }
//       str = str + "  max_price = " + a7 + " and";
//     }

//     if (x.modal_price != "") {
//       if (where == false) {
//         str = str + "where";
//       }
//       str = str + "  modal_price = " + a8 + " and ";
//     }

//     if (str.substring(str.length - 3, str.length) == "and") {
//       str = str.substring(0, str.length - 3);
//     }

//     console.log(str);

//     client.query(str, (err, res) => {
//       if (!err) {
//         console.log(res.rows);
//       } else {
//         console.log(err.message);
//       }
//     });
//   }

//   function add(data, client) {
//     const ins =
//       'INSERT INTO "test" (state,district,commodity,variety,arrival_date,min_price,max_price,modal_price) VALUES(';

//     for (var i = 0; i < data.length; i++) {
//       var x = data[i];
//       var a1 = "'" + x.state + "'";
//       var a2 = "'" + x.district + "'";
//       var a3 = "'" + x.commodity + "'";
//       var a4 = "'" + x.variety + "'";
//       var a5 = "'" + x.arrival_date + "'";
//       var a6 = "'" + x.min_price + "'";
//       var a7 = "'" + x.max_price + "'";
//       var a8 = "'" + x.modal_price + "'";
//       var str =
//         ins +
//         a1 +
//         "," +
//         a2 +
//         "," +
//         a3 +
//         "," +
//         a4 +
//         "," +
//         a5 +
//         "," +
//         a6 +
//         "," +
//         a7 +
//         "," +
//         a8 +
//         ");";
//       console.log(i + "Added Secessfully");
//       client.query(str, (err, res) => {
//         if (err) console.log(err.message + "Erroor ayi jai bhai");
//       });
//     }
//   }

//   module.exports = { get, add };
