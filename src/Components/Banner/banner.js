import React from 'react'
import './banner.scss'
import 'antd/dist/antd.css';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

function Banner() {
    return (
        <Row className='banner'>
            <Col className='banner-container'>
                <Title className='title'>Devplus Will Support The Early Stage Developers Go The Right Career Path</Title>
                <Title level={5} className='banner-description'>Devplus is not a training center, it’s battle campus for you to level up your skillsets and ready to
                    onboard any projects in our “kindest” companies listing</Title>
                <a href='https://www.facebook.com/profile.php?id=100007443069515' alt='' className='btn'>Learn more</a>
            </Col>
        </Row>
    )
}

export default Banner