const express = require('express');
const app = express();
const productData = require('./productList.json');

let port = process.env.PORT || 3000;

app.get('/',(req,res) => {
res.send("Araah Cosmetics Products")
});

app.get('/products', (req,res) => {
    res.send(productData)
  
})

app.listen(port,()=>{
    console.log(`App is being listened at port ${port}`)
});     