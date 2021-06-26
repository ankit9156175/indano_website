import React from 'react'
import { Container, Row, Col,Image } from 'react-bootstrap';
import Tick from '../../../../assets/images/amazon-global-img/tick.png';
import FadeUpScroll from '../../../../components/scrollComponent/fadeUpScroll/index'
export default function index(props) {
    return (
        <div>
            <Container className="text-center mt-5">
                {props.data.map((data, index) => (
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <Row key={index}>
                                    <Col><FadeUpScroll><h2 className="discpHead font-mobile-extra-bigger">{data.title}</h2></FadeUpScroll></Col>
                                </Row>
                                <FadeUpScroll><Row className="mt-4  text-left">
                                    {data.subText.map((list, index) => (
                                        <Col xs={6} key={index}>
                                            <Image src={Tick}/>
                                            <span className="listText font-mobile-text">{list}</span>
                                        </Col>
                                    ))}
                                </Row></FadeUpScroll>
                                <FadeUpScroll><Row className="mt-4">
                                    <Col><h2 className="listTitle font-mobile-bigger">{data.titleTwo}</h2></Col>
                                </Row></FadeUpScroll>
                                <FadeUpScroll><Row className="mt-2 mb-5">
                                    <Col xs={12} className="">
                                        <p className="listSubText font-mobile-text">{data.text}</p>
                                    </Col>
                                </Row></FadeUpScroll>
                            </Col>
                        </Row>
                    </Container>
                ))}
            </Container>
        </div>
    )
}
