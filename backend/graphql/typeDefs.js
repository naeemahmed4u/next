const { gql } = require("apollo-server");

module.exports = gql`
  type Asset {
    id: ID!
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
    getAssets: [Asset]
    getAsset(assetId: ID!): Asset
  }
  type Mutation {
    addAsset(assetInput: AssetInput): Asset
  }
`;
