import { Formik, Form } from "formik";
import { TextField } from "../components/TextField";
import { useMutation } from "@apollo/react-hooks";
import * as Yup from "yup";
import gql from "graphql-tag";
import DatePicker from "../components/DatePicker";
import styles from '../styles/Home.module.scss'


export default function AddAsset() {
  const [addAsset] = useMutation(ADD_ASSET);

  return (
    <Formik
      initialValues={{
        description: "",
        assetTagID: "",
        purchasedFrom: "",
        purchaseDate:new Date().toDateString(),
        brand: "",
        cost: "",
        model: "",
        serialNo: "",
      }}
      validationSchema={Yup.object({
        description: Yup.string()
          .max(15, "Must be 15 charaters or less")
          .required("Required"),
        assetTagID: Yup.string()
          .max(20, "Must be 20 charaters or less")
          .required("Required"),
        purchasedFrom: Yup.string()
          .max(20, "Must be 20 charaters or less")
          .required("Required"),
        purchaseDate: Yup.string()
          //.max(20, "Must be 20 charaters or less")
          .required("Required"),
        brand: Yup.string()
          .max(20, "Must be 20 charaters or less")
          .required("Required"),
        cost: Yup.string()
          .max(20, "Must be 20 charaters or less")
          .required("Required"),
        model: Yup.string()
          .max(20, "Must be 20 charaters or less")
          .required("Required"),
        serialNo: Yup.string()
          .max(20, "Must be 20 charaters or less")
          .required("Required"),
      })}
      onSubmit={(values) => {
        const { description,assetTagID,purchasedFrom,purchaseDate,brand,cost,model,serialNo } = values;

        addAsset({
          variables: {
            description,
            assetTagID,
            purchasedFrom,
            purchaseDate,
            brand,
            cost,
            model,
            serialNo,
          },
        });

        console.log(description, assetTagID, purchasedFrom, purchaseDate, brand, cost, model, serialNo);
      }}
    >
      <Form className={styles.card}>
        <TextField
          label="Description"
          name="description"
          type="text"
          placeholder="Enter Asset Description..."
        />
        <TextField label="Asset Tag ID" name="assetTagID" type="text" />
        <TextField label="Purchased From" name="purchasedFrom" type="text" />
        <DatePicker label="Purchase Date" name="purchaseDate"/>
        <TextField label="Brand" name="brand" type="text" />
        <TextField label="Cost" name="cost" type="text" />
        <TextField label="Model" name="model" type="text" />
        <TextField label="Serial No." name="serialNo" type="text" />
        <button className="btn btn-dark mt-3" type="submit">
          Submit
        </button>
        <button className="btn btn-danger mt-3 ml-3" type="reset">
          Cancel
        </button>
      </Form>
    </Formik>
  );
}

const ADD_ASSET = gql`
  mutation addAsset(
    $description: String!
    $assetTagID: String!
    $purchasedFrom: String!
    $purchaseDate: String!
    $brand: String!
    $cost: String!
    $model: String!
    $serialNo: String!
  ) {
    addAsset(
      assetInput: {
        description: $description
        assetTagID: $assetTagID
        purchasedFrom: $purchasedFrom
        purchaseDate: $purchaseDate
        brand: $brand
        cost: $cost
        model: $model
        serialNo: $serialNo
      }
    ) {
      id
      description
      assetTagID
      purchasedFrom
      purchaseDate
      brand
      cost
      model
      serialNo
    }
  }
`;
