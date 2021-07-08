const { AuthenticationError, UserInputError } = require('apollo-server');

const Asset = require('../models/Asset');


module.exports = {

    Query: {
      
        getAssets: async()=>{
           
                return assets = await Asset.find();
        },                 

        async getAsset(_,{assetId}){
            const asset = await Asset.findById(assetId);
            return asset;
        }
        },

    

    Mutation: {
        async addAsset(_, {assetInput: { description, assetTagID, purchasedFrom, purchaseDate, brand, cost, model, serialNo }}) {
            const newAsset = new Asset({
                description,
                assetTagID,
                purchasedFrom,
                purchaseDate,
                brand,
                cost,
                model,
                serialNo,
            });

            const asset = await newAsset.save();

            return asset;
        }
    }
};

