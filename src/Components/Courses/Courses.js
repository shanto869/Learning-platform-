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
                <h5>Total Courses: {courses.length}</h5>
                <p>
                    {
                        courses.map(course => <NavLink to={`/course/${course.id}`}
                            key={course.id} className="side-nav d-block" >{course.course_title}</NavLink>)
                    }
                </p>
            </div>
            <div>
                <h4 className='text-center my-4'>Our Most Popular Courses</h4>
                <div className='course-card mb-4'>
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