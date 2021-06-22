const { model, Schema } = require('mongoose');

const assetSchema = new Schema({
    description: String,
    assetTagID: String,
    purchasedFrom: String,
    purchaseDate: String,
    brand: String,
    cost: String,
    model: String,
    serialNo: String

});

module.exports = model('Asset', assetSchema);
