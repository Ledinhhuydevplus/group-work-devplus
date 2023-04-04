import React from 'react'
import "antd/dist/antd.css";
import {Row} from "antd"
import './Loader.scss'

const Loader = () => {
    return (
        <>
            <Row id="loader" className="loader">
                <div className="container">
                    <div className="loader__icon">
                        <img src="https://devplus.edu.vn/assets/images/devplus/logo_loading.png" alt="loader" />
                    </div>
                </div>
            </Row>
        </>
    )
}

export default Loader