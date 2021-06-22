import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function NavBar() {
    return (
        <>
            <ul className="nav justify-content-end " >
                <li className="nav-item">
                    <Link href="/"><a className="nav-link active" >Home</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/login"><a className="nav-link" href="#">Login</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/Signup"><a className="nav-link" href="#">Sign Up</a></Link>
                </li>

            </ul>
        </>
    )
}