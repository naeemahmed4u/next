const { ApolloServer, gql } = require("apollo-server-express");
const { createWriteStream, existsSync, mkdirSync } = require("fs");
const path = require("path");
const express = require("express");


const files = [];


module.exports = gql`

scalar Upload  

 
type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Asset {
    id: ID!  
    picture: String  
    description: String
    assetTagID: String
    purchasedFrom: String
    purchaseDate: String
    brand: String
    cost: String
    model: String
    serialNo: String
  }
 

  input AssetInput {
    picture: String
    description: String
    assetTagID: String
    purchasedFrom: String
    purchaseDate: String
    brand: String
    cost: String
    model: String
    serialNo: String
  }

  type Query {    
    # files: [String]
    getAssets: [Asset]
    getAsset(assetId: ID!): Asset
    uploads: [File]
    otherFields:Boolean!
  }
  type Mutation {
    addAsset(assetInput: AssetInput): Asset
    uploadFile(file: Upload!): File!
  }
`;
