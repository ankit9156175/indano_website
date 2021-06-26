import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Group from '../../../assets/images/tatacliq-img/Group.png'
import FadeUpScroll from '../../../components/scrollComponent/fadeUpScroll/index';

export default function index() {
    return (
        <Container style={{ marginTop: '10%' }}>
            <FadeUpScroll><h1 className="serviceHeadText font-mobile-biggerr">TataCliq</h1></FadeUpScroll>
            <FadeUpScroll><h2 className="mt-4 text-muted font-italic font-weight-bold">Its one of leading e-commerce platform around indian marketplace. Tatacliq give their sellers appropriate chance to get onboard for online selling</h2></FadeUpScroll>
            <Row className="mt-5 pt-3">
                <Col className="col-6">
                <FadeUpScroll><h3 className="text-light-org font-weight-bold mb-3">Seller's Training</h3></FadeUpScroll>
                    <FadeUpScroll><p className=" text-size">Get training on everything, how selling on Tataclip works, day to day operations, how to check your orders, how to manage your Tatacliq account and so on.</p></FadeUpScroll>
                    <FadeUpScroll><p className="text-size">There are few documents needed for seller onboard process:</p></FadeUpScroll>
                    <FadeUpScroll><ul className=" text-size">
                        <li>PAN card</li>
                        <li>GST certificate</li>
                        <li>CIN</li>
                        <li>Cancelled cheque</li>
                        <li>Company logo</li>
                        <li>Bank confirmation on electronic clearence form with attachment.</li>
                    </ul></FadeUpScroll>
                </Col>
                <Col className="col-5 offset-1">
                <FadeUpScroll><Image src={Group} width={'70%'} className="pt-5 mt-sm-0 pt-sm-0" /></FadeUpScroll>
                </Col>
            </Row>
            <FadeUpScroll><h2 className=" mt-5 text-center companyHeadText">Benefits of selling with Tatacliq</h2></FadeUpScroll>
            <FadeUpScroll><Row className="mt-4 mb-5">
                <Col className="col-3 offset-3 font-weight-bold text-center text-size"><p>Plethora of customers</p>
                    <p>Valuable tips</p></Col>
                <Col className="col-3 font-weight-bold text-center text-size"><p>Easily monitor your sales</p>
                    <p>Transparency</p></Col>
            </Row></FadeUpScroll>
        </Container>
    )
}
