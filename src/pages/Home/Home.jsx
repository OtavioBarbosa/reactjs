import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import styles from './home.module.scss'

const Home = () => {

    return (
        <>
            <div>
                Home
                <FontAwesomeIcon className={`${styles.icon_computer}`} icon={faComputer} />
            </div>
        </>
    )
}

export default Home