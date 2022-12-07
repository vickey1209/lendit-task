const express = require("express");
// const { appendFile } = require("fs");
const mongoose = require ('mongoose');
const path = require("path");
const res = require('res');


const app = express();
app.listen ()
require("./db/conn");

const port = process.env.PORT || 3000;

const lenditt = require("./model/contact.js");

const template_path = path.join(__dirname,"./templates/views");


app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set("view engine" , "ejs");
app.set("views", template_path);


app.get("/", (req, res) =>{
    res.render("index");
  
});

const contactlist = [
    { id: 1 , name: '+911234567890' },
    {  id: 2, name: '+911234567890' },
    {  id: 3 ,name: '1234567890' },
    {  id: 1 ,name: '1234567890' },
    {  id: 1 ,name: '+912345654323' }
 
];
                        

lenditt.create(contactlist, function (err, contacts) {

    if (err) {

        console.log(err);

    }
    else
    {
   console.log("stored array")
    }
 
   
});

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
  });
