import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '../components/TextField';
import * as Yup from 'yup';


const Login = () => {
    const validate = Yup.object({
        username: Yup.string()
            .required('Required'),
        password: Yup.string()
            .required('Password is required'),
    })

    // const [username, setUserName] = useState("");
    // const [password, setPassword] = useState("");

    // const [confirmPassword, setConfirmPassword ] = useState("");

    // const [creactPost] = useMutation(CREATE_POST);

    // const addPost=()=>{

    //     creactPost({
    //         variables: {
    //             firstName,
    //             lastName,
    //             email,
    //             password,
    //             confirmPassword
    //         },

    //     });

    //     // if(error){
    //     //     console.log(error);
    //     // }
    //     console.log(firstName,lastName,email,password,confirmPassword);

    // };



    return (
        <Formik
            initialValues={{
                username: '',
                password: ''
            }}
            validationSchema={validate}
            onSubmit={(values) => {

                const { username, password } = values;
                console.log(username, password);
                // setUserName(username);
                // setPassword(password);

            }}

        >
            <Form>
                <h1 className="my-4 font-weight-bold-display-4">Login</h1>
                <TextField label="User Name: " name="username" type="text" placeholder="User Name" />
                <TextField label="Password: " name="password" type="password" placeholder="Password" />
                <button className="btn btn-dark mt-3" type="submit" >Login</button>
                <button className="btn btn-danger mt-3 ml-3" type="reset">Cancel</button>
            </Form>

        </Formik>
    )
}

export default Login;