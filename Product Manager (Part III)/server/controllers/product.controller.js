const { Product } = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    })
};

module.exports.getAll = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
};

module.exports.getProduct = (request, response) => {
    Product.findOne({_id: request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
};

module.exports.addProduct = (request, response) => {
    Product.create(request.body)
        .then(createdProduct => response.json(createdProduct))
        .catch(err => response.json(err))
};

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate(
        {_id: request.params.id },
        request.body, 
        { new: true, runValidators: true}
    )
    .then(updateProduct => response.json(updateProduct))
    .catch(err => response.json(err))
};

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
};