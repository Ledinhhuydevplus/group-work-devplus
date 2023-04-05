import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Typography } from 'antd'
import './about.scss'
import axios from 'axios';

const { Title } = Typography;


const About = () => {

    const [about, setAbout] = useState([]);
    const [road, setRoad] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:1000/api/devPlus/get_about')
            .then((response) => setAbout(response.data));

        axios.get('http://localhost:1000/api/devPlus/get_be_devPlus')
            .then((response) => setRoad(response.data));
    }, []);

    return (
        <Row className='about'>
            <Col className='container'>
                <Row className='row' gutter={[50]}>
                    <Col lg={16} md={24} sm={24} xs={24} className='card-container' >
                        <Card className='card'>
                            <p className='about-title'>{about[0] && about[0].title}</p>
                            <Title level={2} className='about-title2'>{about[0] && about[0].name}</Title>
                            <p className='about-description'>{about[0] && about[0].description}</p>
                        </Card>
                    </Col>
                    <Col lg={8} md={24} sm={24} xs={24} className='second-card'>
                        <Row className='title-card'>
                            <Title style={{ color: "white"}} level={4}>{road[0] && road[0].title}</Title>
                        </Row>
                        <ul>
                            {road.map((road_item, index) => (
                                <li key={index} className='date' >
                                    <span>{road_item.number}</span>
                                    <div className='desc'>{road_item.description}</div>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default About