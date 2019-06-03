//Following two lines create an express app
const express = require("express"); 
const app = express();

var properties = new Array();
//Body Parser Middlware:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//"/link" relates to the url
app.get("/properties", (req,res) => {
    // //new object:
    // properties.push({
    //     id: 1,
    //     name: "One",
    //     location:"Lisbon"
    // });
    // //.json helps convert properties array
    // //into json 
    res.json(properties);
});

app.post("/properties", (req,res) => {
    const property = req.body;
    // console.log(property);
    properties.push(property);
    res.json(property);

})
//start listening on port 3000, when you reach it,
//do the following functions

//the (err) part will run later - takes a few ms
app.listen(3000, (err) => {
    //if there's an error listening up:
    if (err) {
        console.log("Oops, error");
        return;
    }
    console.log("Server listening port 3000");
})

console.log("This app runs"); //use node index.js in terminal to run
