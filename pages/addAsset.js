import { Formik, Form } from 'formik';
import { TextField } from '../components/TextField';
import * as Yup from 'yup';


export default function AddAsset() {



    return (
        <Formik
            initialValues={{
                description: '',
                assetTagID: '',
                purchasedFrom: '',
                purchaseDate: '',
                brand: '',
                cost: '',
                model: '',
                serialNo: ''
            }}

            validationSchema={Yup.object({
                description: Yup.string()
                    .max(15, 'Must be 15 charaters or less')
                    .required('Required'),
                assetTagID: Yup.string()
                    .max(20, 'Must be 20 charaters or less')
                    .required('Required'),
                purchasedFrom: Yup.string()
                    .max(20, 'Must be 20 charaters or less')
                    .required('Required'),
                purchaseDate: Yup.string()
                    .max(20, 'Must be 20 charaters or less')
                    .required('Required'),
                brand: Yup.string()
                    .max(20, 'Must be 20 charaters or less')
                    .required('Required'),
                cost: Yup.string()
                    .max(20, 'Must be 20 charaters or less')
                    .required('Required'),
                model: Yup.string()
                    .max(20, 'Must be 20 charaters or less')
                    .required('Required'),
                serialNo: Yup.string()
                    .max(20, 'Must be 20 charaters or less')
                    .required('Required')
            })}
            onSubmit={(values) => {
                const { description, assetTagID, purchasedFrom, purchaseDate, brand, cost, model, serialNo } = values;
                //console.log(description, assetTagID, purchasedFrom, purchaseDate, brand, cost, model, serialNo);
            }}

        >
            <Form>
                <TextField label="Description" name="description" type="text" placeholder="Enter Asset Description..." />
                <TextField label="Asset Tag ID" name="assetTagID" type="text" />
                <TextField label="Purchased From" name="purchasedFrom" type="text" />
                <TextField label="Purchase Date" name="purchaseDate" type="text" />
                <TextField label="Brand" name="brand" type="text" />
                <TextField label="Cost" name="cost" type="text" />
                <TextField label="Model" name="model" type="text" />
                <TextField label="Serial No." name="serialNo" type="text" />
                <button className="btn btn-dark mt-3" type="submit">Submit</button>
                <button className="btn btn-danger mt-3 ml-3" type="reset">Cancel</button>



            </Form>

        </Formik>

    );


}

// return (
//     <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//       }}
//       validationSchema={Yup.object({
//         firstName: Yup.string()
//           .max(15, 'Must be 15 charaters or less')
//           .required('Required'),
//         lastName: Yup.string()
//           .max(20, 'Must be 20 charaters or less')
//           .required('Required'),
//         email: Yup.string()
//           .email('Email is invalid')
//           .required('Email is required'),
//         password: Yup.string()
//           .min(6, 'Password must be at least 6 charaters')
//           .required('Password is required'),
//         confirmPassword: Yup.string()
//           .oneOf([Yup.ref('password'), null], 'Password must match')
//           .required('Confirm password is required'),
//       })}
//       onSubmit={(values) => {
//         const { firstName, lastName, email, password, confirmPassword } = values;
//         console.log(firstName, lastName, email, password, confirmPassword);
//         setFirstName(firstName);
//         setLastName(lastName);
//         setEmail(email);
//         setPassword(password);
//         setConfirmPassword(confirmPassword);
//         // addPost();

//       }}
//     >
//       <Form>
//         <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
//         <TextField label="First Name" name="firstName" type="text" />
//         <TextField label="Last Name" name="lastName" type="text" />
//         <TextField label="Email" name="email" type="email" />
//         <TextField label="Password" name="password" type="password" />
//         <TextField label="Confirm Password" name="confirmPassword" type="password" />
//         <button className="btn btn-dark mt-3" type="submit">Register</button>
//         <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
//       </Form>
//     </Formik>
//   )