import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import user from '../../image/user.png'
import { useState, useEffect, useRef } from 'react'
import post from '../../image/postexamp.jpeg'
import { AiFillCalendar, AiFillClockCircle } from "react-icons/ai";
import { RiGroupFill } from 'react-icons/ri'
import { Link } from "react-router-dom";

import './index.css'

function LargeCrowdFinderCard(props) {
    const [show, setShow] = useState(false);
    const eventid = props
    const ref = useRef();
    useOnClickOutside(ref, () => setShow(false));

    const toggleDropDown = () => {
        setShow(!show);
    }

    function useOnClickOutside(ref, handler) {
        useEffect(
            () => {
                const listener = (event) => {
                    if (!ref.current || ref.current.contains(event.target)) {
                        return;
                    }
                    handler(event);
                };
                document.addEventListener("mousedown", listener);
                document.addEventListener("touchstart", listener);
                return () => {
                    document.removeEventListener("mousedown", listener);
                    document.removeEventListener("touchstart", listener);
                };
            },

            [ref, handler]
        );
    }

    return (

        <>
            <div className="divider my-3 mb-3"></div>
            <div className="head-container">

                <div className="d-flex">
                    <div className="imageAvatar">
                        <img src={user} />
                    </div>
                    <div className="headText container-fluid d-block">

                        <div ref={ref} className="d-flex justify-content-end m-0 positionRelative">
                            <i class="fa fa-ellipsis-h d-flex justify-content-end m-0"
                                onClick={() => toggleDropDown()}
                                tabIndex="0"></i>
                            {show && (
                                <div className="card position-absolute text-center stylingHover" style={{ width: '7rem' }}>
                                    <div>Edit</div>
                                    <div>Delete</div>
                                </div>
                            )}
                        </div>
                        <div className="headText-main d-flex">
                            <div className="my-auto">
                                <h5 className='me-3' style={{ fontSize: '20px', fontWeight: '400' }}>{props.username}</h5></div>
                            <h5 style={{ fontSize: '20px', fontWeight: '400' }}>Posted an event</h5>
                        </div>
                        <p style={{ fontSize: '16px', fontWeight: '400', color: '#4F4F4F' }}>1 hours ago</p>
                    </div>
                </div>

                <div>
                    <Card>
                        <div className="me-3 ms-3 mt-3 mb-4">
                            <div className="image-hero" style={{ backgroundImage: `url(${post})` }}>
                            </div>
                            <h5 className='title-event my-3'>{props.title}</h5>
                            <Row className="time-event my-3 d-flex ">
                                <Col xs={4}>
                                    <div className="calender d-flex align-items-center">
                                        <h4> <AiFillCalendar style={{ color: '#BDBDBD' }} className='me-4' /></h4> <h5>22/09/2021</h5>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="calender d-flex align-items-center">
                                        <h4> <AiFillClockCircle style={{ color: '#BDBDBD' }} className='me-4' /></h4> <h5>09:00 AM</h5>
                                    </div>
                                </Col>
                            </Row>
                            <p className="fontSize">{props.content}</p>
                            <div className="people-event mt-3 d-flex justify-content-between ">
                                <div className="time-event  d-flex align-items-center ">
                                    <h4> <RiGroupFill className='me-4' style={{ color: '#BDBDBD' }} /></h4> <h5>129 people attend this</h5>
                                </div>

                                <div className="time d-flex align-items-center ">
                                    <h5 style={{ color: '#D82671', fontWeight: '400', fontSize: '16px', cursor: 'pointer' }} onClick={props.action} >  See Detail</h5>
                                </div>
                            </div>
                        </div>



                    </Card>

                </div>
            </div>
        </>

    )
}


export default LargeCrowdFinderCard
