import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)

    return (
        <div>
            <div>
                <h5>Total Courses: {courses.length}</h5>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Courses;