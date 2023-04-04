import React from 'react'
import { Row, Col, Card, Typography } from 'antd'
import './about.scss'

const { Title } = Typography;


const about = () => {
    return (
        <Row className='about'>
            <Col className='container'>
                <Row className='row' gutter={[100]}>
                    <Col lg={16} md={16} className='card-container' >
                        <Card className='card'>
                            <p className='about-title'>About devplus</p>
                            <Title level={2} className='about-title2'>The Fact: Skilled labour shortage for software companies but full of freshers and
                                low level juniors</Title>
                            <p className='about-description'>Our responsibility is filling the gap between the quality of graduate students and the quality of engineers. Devplus will help reducing the cost of re-training and
                                accelerating the skill-up progress of students and freshers.</p>
                        </Card>
                    </Col>
                    <Col lg={8} md={8} className='second-card'>
                        <Row>
                            <Title level={4} className='mini-card-title'>Road to be a devplus</Title>
                        </Row>
                        <Row className='date'>
                            <span>1</span>
                            <div className='desc'>Apply Devplus</div>
                        </Row>
                        <Row className='date'>
                            <span>2</span>
                            <div className='desc'>Testing and Interview</div>
                        </Row>
                        <Row className='date'>
                            <span>3</span>
                            <div className='desc'>1st plus (+) campus</div>
                        </Row>
                        <Row className='date'>
                            <span>4</span>
                            <div className='desc'>2nd plus (++) campus</div>
                        </Row>
                        <Row className='date'>
                            <span>5</span>
                            <div className='desc'>Onboard & start your career</div>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default about