import { Formik, Form, useFormikContext } from "formik";
import { TextField } from "../components/TextField";
import { useMutation } from "@apollo/react-hooks";
import * as Yup from "yup";
import gql from "graphql-tag";


export default function Category(onClose) {

    const [addCategory] = useMutation(ADD_CATEGORY);

    const handleCloseClick = () => {
    //  e.preventDefault();    
      onClose();    
    };

    return (

        <Formik
            initialValues={{
                category: "",
                
            }}
            validationSchema={Yup.object({
                category: Yup.string()
                    .required("Required"),
            })}

            onSubmit={(values) => {
                const { category } = values;

                addCategory({
                    variables: { category },
                });                
            }}
        >
            {() => (
                <Form >
                    <TextField label="Category *" name="category" type="text" />                   
                    <button className="btn btn-dark mt-3" type="submit" onClick={handleCloseClick} >
                        Submit
                    </button>
                    <button className="btn btn-danger mt-3 ml-3" type="reset" >
                        Cancel
                    </button>
                </Form>)}
        </Formik>


    );
}

const ADD_CATEGORY = gql`
  mutation addCategory(
    $category:String    
  ) {
    addCategory(
      categoryInput:{
        category:$category      
      }
    ) {
      id
      category
    }
  }
`;

