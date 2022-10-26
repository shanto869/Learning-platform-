import React from 'react';
import './CourseDetails.css'
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDownload, FaStar } from 'react-icons/fa';


const CourseDetails = () => {
    const detail = useLoaderData();
    const { course_price, course_title, details, id, instractor, instractor_img, picture, purchase_quantity, ratings, total_classes, instractor_qualification } = detail;

    return (
        <div className='mx-5 px-5 mt-5'>
            <Card className="px-4">
                <Card.Header className='d-flex justify-content-between'>
                    <span><strong className='text-muted'>Ratings: {ratings} <FaStar></FaStar> </strong></span>
                    <span>
                        <FaDownload className='download-icon'></FaDownload>
                    </span>
                </Card.Header>
                <Card.Body>
                    <Card.Title> <h2>{course_title}</h2></Card.Title>

                    <>
                        <span className='pb-4'>
                            <small className='text-muted me-3'>Total Classes: {total_classes}</small>
                            <small className='text-muted mx-3'>Enrolled: {purchase_quantity} students</small>
                            <small className='text-muted mx-3'>Rattings: {ratings} <FaStar></FaStar></small>

                            <div className='my-4'>
                                <strong className='d-block mb-3'>Course Instractor</strong>
                                <span className='mt-3 d-flex align-items-center'>
                                    <img style={{ height: '40px', width: '40px' }} className='rounded-circle me-2' src={instractor_img} alt="" />
                                    <p className='ms-2 d-inline-block d-flex flex-column justify-content-center'>
                                        <small className='text-muted'>{instractor}</small>
                                        <small className='text-muted d-block'>{instractor_qualification}</small>
                                    </p>
                                </span>

                            </div>
                            <hr className='w-50' />
                        </span>
                        <span className='course-overview'>
                            <p>
                                <strong className='d-block mt-2'>Course Overview</strong>
                                <span>{details}</span>
                            </p>
                            <img src={picture} className='img-fluid rounded' alt="" />
                        </span>
                    </>
                    <span className='d-flex justify-content-end align-items-center mt-4'>
                        <h5>Price of the course: {course_price}</h5>
                        <Link to={`/checkout/${id}`}>
                            <Button className='ms-5 px-4 py-3 btn button-style'>Get Primium Access</Button>
                        </Link>

                    </span>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </div>
    );
};

export default CourseDetails;