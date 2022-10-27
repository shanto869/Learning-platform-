import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'
import { FaStar } from 'react-icons/fa'


const Course = ({ course }) => {
    console.log(course)
    const { course_title, course_price, id, picture, purchase_quantity, ratings, instractor_img, instractor } = course;

    return (
        <div className='mb-4 course-card rounded'>
            <img src={picture} alt="" className='w-100 rounded' />
            <div className='px-3'>
                <h5 className='my-3'><Link to={`/course/${id}`} className='title'>{course_title}</Link></h5>
                <strong className='d-block'>Ratings: {ratings} <FaStar></FaStar>  </strong>
                <strong>Enrolled: {purchase_quantity}</strong>
                <hr />
                <div className='d-flex justify-content-between'>
                    <span>
                        <img style={{ height: '30px', width: '30px' }} className='rounded-circle me-2' src={instractor_img} alt="" />
                        <small className='text-muted'>{instractor}</small>
                    </span>
                    <strong>{course_price}</strong>
                </div>
            </div>
        </div>
    );
};

export default Course;