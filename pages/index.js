// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Login from './login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import AddAsset from './addAsset';
// import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      {/* <Login/>      
      <Signup /> */}
      <AddAsset/>
    </>
  )
}
