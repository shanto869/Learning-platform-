import React from 'react';
import './CheckOut.css'
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import toast from 'react-hot-toast';

const CheckOut = () => {
    const course = useLoaderData();
    const { course_price, course_title, details, id, instractor, instractor_img, picture, purchase_quantity, ratings, total_classes, instractor_qualification } = course;
    console.log(course)

    const handleEnroll = () => {
        toast.success('Congratulation for enrolling this course')
    }

    return (
        <div className='mx-5 px-5 mt-4'>
            <h4 className='text-center mb-4'>Start Your Journey With Us</h4>
            <div className=' d-flex justify-content-center'>
                <div className="card mb-3 checkout" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={picture} className="img-fluid h-100 rounded" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h5 className="card-title">{course_title}</h5>
                                    <span className='text-muted'>
                                        <FaStar className='text-warning'></FaStar> <small > {ratings}</small>
                                    </span>
                                </div>
                                <div className='d-flex justify-content-between align-items-end'>
                                    <div className="card-text text-muted">
                                        <p><small>Total Classes: {total_classes}</small></p>
                                        <p><small>Enrolled: {purchase_quantity}</small></p>
                                        <p><small>Charge: {course_price}</small></p>


                                    </div>
                                    <p className="card-text">
                                        <button onClick={handleEnroll} className='border-none px-2 py-2 button-style side-nav-btn rounded-pill px-5 py-2'>Enroll Now</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;

