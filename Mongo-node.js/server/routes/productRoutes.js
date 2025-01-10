const express = require('express')

const {
    getAllProduct,
    getProductById,
    deleteProduct,
    postProduct,
    editProduct,
    searchByTitle,
}  = require("../controllers/productController") ;

const router = express.Router();
router.get("/", getAllProduct );
router.get("/:id", getProductById );
router.get("/:id", deleteProduct );
router.get("/", postProduct );
router.get("/:id", editProduct );
router.get("/search", searchByTitle );