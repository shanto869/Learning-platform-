import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className='mt-5 text-center'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <strong>{error.statusText || error.message}</strong>
                <strong>{error.status}</strong>
            </p>
        </div>
    );
};

export default ErrorPage;