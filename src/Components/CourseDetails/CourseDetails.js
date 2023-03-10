import React from 'react';
import './CourseDetails.css'
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaDownload, FaStar } from 'react-icons/fa';
import Pdf from "react-to-pdf";

const ref = React.createRef();


const CourseDetails = () => {
    const detail = useLoaderData();
    const { course_price, course_title, details, id, instractor, instractor_img, picture, purchase_quantity, ratings, total_classes, instractor_qualification } = detail;


    return (
        <div className='mx-lg-5 px-lg-5 mx-md-1 px-md-1 mt-5'>
            <Card className="px-4">
                <Card.Header className='d-flex justify-content-between'>
                    <span><strong className='text-muted'>Ratings: {ratings} <FaStar className='text-warning'></FaStar> </strong></span>
                    <span>

                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <FaDownload onClick={toPdf} className='download-icon'></FaDownload>}
                        </Pdf>
                    </span>
                </Card.Header>
                <Card.Body ref={ref}>
                    <Card.Title> <h2 className='heading-font'>{course_title}</h2></Card.Title>

                    <>
                        <span className='pb-4'>
                            <small className='text-muted me-3'>Total Classes: {total_classes}</small>
                            <small className='text-muted mx-3'>Enrolled: {purchase_quantity} students</small>
                            <small className='text-muted mx-3'>Rattings: {ratings} <FaStar className='text-warning'></FaStar></small>

                            <div className='my-4'>
                                <strong className='d-block mb-3 font-monospace'>Course Instractor</strong>
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
                                <strong className='d-block mt-2 heading-font'>Course Overview</strong>
                                <span>{details}</span>
                            </p>
                            <img src={picture} className='img-fluid rounded' alt="" />
                        </span>
                    </>
                    <span className='d-flex justify-content-lg-end justify-content-md-end align-items-center mt-4'>
                        <h5 className=' font-ubuntu fs-5'>Price: <span className='price'>{course_price}</span></h5>
                        <Link to={`/checkout/${id}`}>
                            <button className='ms-lg-5 ms-md-4 ms-sm-3 ms-2 border-none button-style side-nav-btn rounded-pill px-lg-5 px-3 px-md-4 py-lg-3 py-md-3 py-2 font-ubuntu'>Get Primium Access</button>
                        </Link>

                    </span>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </div>
    );
};

export default CourseDetails;