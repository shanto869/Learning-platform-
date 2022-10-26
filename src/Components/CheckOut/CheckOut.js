import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    console.log(course)

    return (
        <div>
            {course.course_title}
        </div>
    );
};

export default CheckOut;