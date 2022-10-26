import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CheckOut = () => {
    const course = useLoaderData();
    const { course_price, course_title, details, id, instractor, instractor_img, picture, purchase_quantity, ratings, total_classes, instractor_qualification } = course;
    console.log(course)

    return (
        <div className='mx-5 px-5 mt-4 min-vh-100'>
            <Card className="bg-dark text-white">
                <Card.Img src={picture} className='img-fluid rounded' alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{course_title}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default CheckOut;