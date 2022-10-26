import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData()
    console.log(details)

    return (
        <div>
            <h4>{details.course_title}</h4>
        </div>
    );
};

export default CourseDetails;