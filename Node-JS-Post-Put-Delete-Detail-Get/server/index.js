const express = require('express')
const { v4: uuidv4 } = require("uuid");

const app = express()

app.use(express.json())


const port = 3000

const products= [
    {
      id: 2,
      description: "Sweet and savory sauces relishes spreads and seasonings",
      name: "Condiments",
    },
    {
      id: 1,
      description: "Soft drinks coffees teas beers and ales",
      name: "Beverages",
    },
    {
      id: 3,
      description: "Desserts candies and sweet breads",
      name: "Confections",
    },
    {
      id: 4,
      description: "Cheeses",
      name: "Dairy Products",
    },
    {
      id: 5,
      description: "Breads crackers pasta and cereal",
      name: "Grains/Cereals",
    },
    {
      id: 6,
      description: "Prepared meats",
      name: "Meat/Poultry",
    },
    {
      id: 7,
      description: "Dried fruit and bean curd",
      name: "Produce",
    },
    {
      id: 8,
      description: "Seaweed and fish",
      name: "Seafood",
    },
  ];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products', (req, res) => {
    res.send(products)
  })
  
  app.get("/api/products", (req, res) => {
    if (products.length > 0) {
      res.status(200).send({
        data: products,
        message: "success",
        error: null,
      });
    } else {
      res.status(204).send({
        data: [],
        message: "data is empty!",
      });
    }
  });
  
  app.put("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const {  description, name } = req.body;
  
    const idx = products.findIndex((p) => p.id === +id);
  
    if (idx !== -1) {
      const updatedProduct = {
        id: +id,
        description,
        name
      };
      products[idx] = updatedProduct;
  
      res.status(200).send({
        message: "successfully updated!",
        updatedProduct,
      });
    } else {
      res.status(404).send({ message: "not found" });
    }
  });
  app.patch("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const { description, name } = req.body;
  
    const idx = products.findIndex((p) => p.id === +id);
  
    if (idx !== -1) {
      
      if (description !== undefined) {
        products[idx].description = description;
      }
    
      if (name !== undefined) {
        products[idx].name = name;
      }
  
      res.status(200).send({
        message: "successfully updated!",
        updatedProduct: products[idx],
        products,
      });
    } else {
      res.status(404).send({ message: "not found" });
    }
  });

  app.post("/api/products", (req, res) => {
    const { description, name } = req.body;
  
    const newProduct = {
      id:  uuidv4(),
      name,
      description,
    };
  
    products.push(newProduct);
    res.status(201).send({
      message: "successfully posted product!",
      newProduct,
    });
  });


app.delete("/api/products/:id", (req, res) => {
    const { id } = req.params;
  
    const idx = products.findIndex((p) => p.id === +id);
  
    if (idx === -1) {
      res.status(404).send({
        message: "no such product to delete!",
      });
    } else {
      const deleted = products.splice(idx, 1);
      res.status(200).send({
        deletedProduct: deleted,
        products: products,
        message: "succesfully deleted!",
      });
    }
  });

  app.listen(port, () => {
    console.log(`Link:  http://localhost:${port}`)
  })
   