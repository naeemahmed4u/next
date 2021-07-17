import React from 'react'
import styles from '../styles/Card.module.css'
import Tilt from 'react-vanilla-tilt'

export default function Card() {
    return (
        <>
            <Tilt>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div className="content">
                            <h2>
                                Hello</h2>
                            <h3>                 Hello World</h3>
                            <p>Welcome to Sabri Solutions</p>
                        </div>
                    </div>
                </div>
            </Tilt>
            <div div className={styles.container}>
                <div className={styles.card}>
                    <div className="content">
                        <h2>
                            Hello</h2>
                        <h3>                 Hello World</h3>
                        <p>Welcome to Sabri Solutions</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className="content">
                        <h2>
                            Hello</h2>
                        <h3>                 Hello World</h3>
                        <p>Welcome to Sabri Solutions</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className="content">
                        <h2>
                            Hello</h2>
                        <h3>                 Hello World</h3>
                        <p>Welcome to Sabri Solutions</p>
                    </div>
                </div>


            </div>





        </>
    )
}
