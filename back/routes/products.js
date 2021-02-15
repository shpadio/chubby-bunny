import express from 'express';
import Product from '../models/Product';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === "image/jpg"  ||
        file.mimetype ==="image/jpeg"  ||
        file.mimetype ===  "image/png"){

        cb(null, true);
    }else{
        cb(new Error("Image uploaded is not of type jpg/jpeg or png"),false);
    }
}

const upload = multer({storage: storage, fileFilter : fileFilter});
router.post('/',upload.array('images',5),async(req, res, next)=>{

    let newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        images: req.files
    });
    await newProduct.save();
    res.send(newProduct);
});
export {router as ProductRoutes};