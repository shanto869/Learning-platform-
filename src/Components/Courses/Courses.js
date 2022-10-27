import React from 'react';
import './Courses.css'
import { NavLink, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses)

    return (
        <div className='courses-container'>
            <div className='course-title'>
                <h5 className='mb-3 font-ubuntu'>Our Courses</h5>
                <span className='side-navbar'>
                    {
                        courses.map(course => <>
                            <button className='rounded-2 border-none px-2 py-2 button-style side-nav-btn link'>
                                <NavLink to={`/course/${course.id}`}
                                    key={course.id} className="side-nav d-block fw-bold menu-font" >{course.course_title}
                                </NavLink>
                            </button>
                        </>)
                    }
                </span>
            </div>
            <div>
                <h4 className='text-center my-4 font-ubuntu'>Our Most Popular Courses</h4>
                <div className='course-container mb-4'>
                    {
                        courses.map(course => <Course key={course.id}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;