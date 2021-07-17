
const { ApolloServer, gql } = require("apollo-server-express");
const { createWriteStream, existsSync, mkdirSync } = require("fs");
const {GraphQLUpload} = require('graphql-upload');

const path = require("path");
const express = require("express");



const Asset = require('../models/Asset');
const { finished } = require("stream");


const files = [];

// function generateRandomString(length) {
//     var result = ''
//     var characters =
//       'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     var charactersLength = characters.length
//     for (var i = 0; i < length; i++) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength))
//     }
//     return result
//   }

module.exports = {

    Query: {

        getAssets: async () => {

            return assets = await Asset.find();
        },
        // files: () => files,

        // async getAsset(_, { assetId }) {
        //     const asset = await Asset.findById(assetId);
        //     return asset;
        // },
        // uploads: (parent, args) => {},

    },

    Upload: GraphQLUpload,

    Mutation: {
        async addAsset(_, { assetInput: { picture, description, assetTagID, purchasedFrom, purchaseDate, brand, cost, model, serialNo } }) {
            const newAsset = new Asset({
                picture,
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
        },

        uploadFile: async (_, { file}) => {
            const { createReadStream, filename, mimetype, encoding } = await file;
            
             const pathName = '../images/'+filename;
            
            // const pathName = path.join(__dirname, filename)

            const stream=createReadStream();
            
            return new Promise((resolve,reject)=>{
                stream
                .pipe(fs.createWriteStream(pathName))
                .on("finished",()=>{
                    resolve({
                        success:true,
                        message:"Sucessfully Uploaded",
                        mimetype,filename,encoding,location:pathName
                    })
                })
                .on("error",(err)=>{
                    console.log("Error Event Emitted")
                    reject({
                        sucess:false,
                        message: "Failed"
                    })
                })
                
            })
            
            // const out=require('fs').createWriteStream('local-file-output.txt');
            // stream.pipe(out);
            // await stream.pipe(fs.createWriteStream(pathName))
            // await finished(out);      
                  
            // return {filename,mimetype,encoding};
          }
        // uploadFile: async (parent, { file }) => {
        //     const { createReadStream, filename } = await file
      
        //     const { ext } = path.parse(filename)
        //     const randomName = generateRandomString(12) + ext
      
        //     const stream = createReadStream()
        //     const pathName = path.join(__dirname, `../images/${randomName}`)
        //     await stream.pipe(fs.createWriteStream(pathName))
      
        //     return {
        //       url: `http://localhost:5000/images/${randomName}`,
        //     }
        //   },
    }
};

