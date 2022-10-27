import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='mb-5 interview-container'>
                <h4 className='mt-0'>Interview Question</h4>

                <div className="accordion accordion-flush w-75 mx-auto mt-3" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header  py-3" id="flush-headingOne">
                            <button className="accordion-button collapsed fs-5 heading-color heading-font"
                                type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="false" aria-controls="flush-collapseOne">
                                What is cors ?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>
                                    <FaHandPointRight className='me-2'></FaHandPointRight>
                                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                                </p>
                                <p>
                                    <FaHandPointRight className='me-2'></FaHandPointRight>
                                    CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header  py-3" id="flush-headingTwo">
                            <button className="accordion-button collapsed fs-5 heading-color heading-font"
                                type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                aria-expanded="false" aria-controls="flush-collapseTwo">
                                Why are you using firebase ? What other options do you have to implement authentication?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>
                                    <FaHandPointRight className='me-2'></FaHandPointRight>
                                    Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.</p>
                                <p>
                                    <FaHandPointRight className='me-2'></FaHandPointRight>
                                    MongoDB, Oracle Database, Amazon Redshift, DataStax Enterprise, Redis Enterprise Cloud, Cloudera Enterprise Data Hub, Db2, Couchbase Server.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header  py-3" id="flush-headingThree">
                            <button className="accordion-button collapsed fs-5 heading-color heading-font"
                                type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                aria-expanded="false" aria-controls="flush-collapseThree">
                                How does the private route work?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>
                                    <FaHandPointRight className='me-2'></FaHandPointRight>
                                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.</p>
                                <p>
                                    <FaHandPointRight className='me-2'></FaHandPointRight>
                                    If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header  py-3" id="flush-headingFour">
                            <button className="accordion-button collapsed fs-5 heading-color heading-font"
                                type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                aria-expanded="false" aria-controls="flush-collapseFour">
                                How does the private route work?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>
                                    <FaHandPointRight className='me-2'></FaHandPointRight>
                                    Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                                <p>
                                    <FaHandPointRight className='me-2'></FaHandPointRight>
                                    Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;