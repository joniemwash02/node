const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/product">products</a> <a href="/api/product">products</a>');
});

//some product

app.get("/api/product", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});

//single product

// app.get("/api/product/1", (req, res) => {
//   const singleProduct = products.find((product) => {
//     return product.id === 1;
//   });

//   res.json(singleProduct);
// });

app.get("/api/product/:productID", (req, res) => {
  const { productID } = req.params;
  const singleproducts = products.find(
    (product) => product.id === Number(productID)
  );
  if(!singleproducts){
    return res.status(404).send('product does not exit')
  }
  return res.json(singleproducts);
});

app.get('/api/product/:productID/reviews/:reviewID',(req, res)=>{
    console.log(req.params)
})

//searching from an arry 

app.get('/api/v1/query',(req, res)=>{
    const {search, limit}=req.query
    let soltedProduct= [...products]
    if(search){
        soltedProduct=soltedProduct.filter((product)=>{
            return product.name.startsWith(search)
        })
    
    }
    if(limit){
        soltedProduct=soltedProduct.slice(0, Number(limit))
    }
    if(soltedProduct.length<1){
        res.status(200).send('no products found')
    }
    res.status(200).json(soltedProduct)
})

app.all("*", (req, res) => {
  res.status(404).send("page not found");
});



app.listen(5000, () => {
  console.log("port 5000");
});
