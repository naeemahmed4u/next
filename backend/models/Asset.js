const { model, Schema } = require('mongoose');

const assetSchema = new Schema({
    picture:String,
    description: String,
    assetTagID: String,
    purchasedFrom: String,
    purchaseDate: String,
    brand: String,
    cost: String,
    model: String,
    serialNo: String,
    site:String,
    category:String,
    location:String,
    department:String
});

module.exports = model('Asset', assetSchema);
