const ProductModel = require("../models/productModel");

const getAllProduct = async (req, res) => {
    console.log("aaa");
    try {
        const products = await ProductModel.find({});
        res.status(200).json({ data: products, message: "sucsess!"})
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
    
};

const getProductById = async ( req, res) =>{
const { id } =req.params;
try {
    const products = await ProductModel.findById({});
    res.status(200).json({ data: products, message: "sucsess!"})
} catch (error) {
    res.status(500).send({ message: error.message })
}

};

const deleteProduct = async ( req, res) => {  
    const { id } =req.params;
    try {
        const products = await ProductModel.find({});
        res.status(200).json({ data: products, message: "sucsess!"})
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
};

const  editProduct = async ( req, res ) => {
    const { id } =req.params;
    try {
        const products = await ProductModel.find({});
        res.status(200).json({ data: products, message: "sucsess!"})
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
};
const  searchByTitle= async ( req, res ) => {
    const { title } = req.query;
    try {
        const products = await ProductModel.find({});
        res.status(200).json({ data: products, message: "sucsess!"})
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
};


module.export = {
getAllProduct,
getProductById,
deleteProduct,
editProduct,
searchByTitle,
};