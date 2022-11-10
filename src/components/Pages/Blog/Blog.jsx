import React from 'react';
import { BsFillChatTextFill, BsFillDiagram2Fill } from "react-icons/bs";
import useTitle from '../../../hooks/useTitle';

import blog01 from '../../../assets/blog/SQL-VS-NoSQL-1.jpg';
import blog02 from '../../../assets/blog/workflow_jwt.png';
import blog03 from '../../../assets/blog/node.jpg';
import blog04 from '../../../assets/blog/nodejs-use-cases-cover-image.png';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='my-10 page-title-overlay'>
            <section className="bg-primary py-10 relative">
                <div className="container mx-auto">
                    <div className="block text-center">
                        <span className="text-white">Our blog</span>
                        <h1 className="capitalize mb-5 text-4xl font-bold text-white">Blog articles</h1>
                    </div>
                </div>
            </section>

            <div className="w-9/12 mx-auto">
                <div className="">
                    <div className="my-3">
                        <img src={blog01} alt="" className="img-fluid" />
                        <div className="blog-item-content mt-5">
                            <div className="mb-3 flex gap-5">
                                <p className="capitalize flex items-center gap-3"><BsFillDiagram2Fill /> <span>Database</span></p>
                                <p className="capitalize flex items-center gap-3"><BsFillChatTextFill /><span>5 Comments</span></p>
                            </div>
                            <h2 className="text-xl my-5 lg:text-3xl md:text-3xl capitalize font-bold">Difference between SQL and NoSQL</h2>
                            <div className='flex flex-col gap-5'>
                                <p>
                                    From analysts and engineers to IT decision makers, many are familiar with Relational Database Management Systems (RDBMS) and the Structured Query Language (SQL) used to interact with them. While these terms refer to a decades-old paradigm which remains a wide standard, today the sheer variety and depth of database systems can be dizzying. What's more, rising volumes of unstructured data, availability of storage and processing power, and evolving analytic requirements have generated interest in fundamentally different technologies.
                                </p>
                                <p>
                                    Collectively known as NoSQL, these popular alternatives to traditional RDBMSs show promise for a variety of modern use cases.
                                </p>
                                <p>
                                    To make informed decisions about which to use, practitioners should be aware of the differences between SQL, NoSQL, individual Database Management Systems (DBMS) and languages, as well as the situations each is best-suited for, and how the landscape is changing.
                                </p>
                                <h3 className='text-xl my-5 lg:text-3xl md:text-3xl capitalize font-bold'>SQL vs NoSQL: Five Main Differences</h3>
                                <p>
                                    SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                                </p>
                                <p>
                                    SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it's particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-9/12 mx-auto">
                <div className="lg:mt-10">
                    <div className="my-3">
                        <div>
                            <img src={blog02} alt="" className="img-fluid" />
                        </div>
                        <div className="blog-item-content mt-5">
                            <div className="mb-3 flex gap-5">
                                <p className="capitalize flex items-center gap-3"><BsFillDiagram2Fill /> <span>Database</span></p>
                                <p className="capitalize flex items-center gap-3"><BsFillChatTextFill /><span>5 Comments</span></p>
                            </div>
                            <h2 className="text-xl my-5 lg:text-3xl md:text-3xl capitalize font-bold">What is JWT, and how does it work?</h2>
                            <div className='flex flex-col gap-5'>
                                <h3 className='text-xl lg:text-xl md:text-3xl capitalize font-bold'>What is JWT (JSON Web Token)?</h3>
                                <p>
                                    JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.
                                </p>
                                <p>
                                    The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.
                                </p>
                                <p>
                                    JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                                </p>
                                <h3 className='text-xl lg:text-xl md:text-3xl capitalize font-bold'>How JWT Works?</h3>
                                <p>
                                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. <br /> A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON strings:

                                </p>
                                <ol>
                                    <li>The header and the payload.</li>
                                    <li>The signature. </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-9/12 mx-auto">
                <div className="">
                    <div className="my-3">
                        <img src={blog03} alt="" className="img-fluid" />
                        <div className="blog-item-content mt-5">
                            <div className="mb-3 flex gap-5">
                                <p className="capitalize flex items-center gap-3"><BsFillDiagram2Fill /> <span>Language</span></p>
                                <p className="capitalize flex items-center gap-3"><BsFillChatTextFill /><span>5 Comments</span></p>
                            </div>
                            <h2 className="text-xl my-5 lg:text-3xl md:text-3xl capitalize font-bold">Differences Between Node.js and JavaScript?</h2>
                            <div className='flex flex-col gap-5'>
                                <p>
                                    1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language. As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.
                                </p>

                                <p>
                                    2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.
                                </p>
                                <p>
                                    3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.
                                </p>
                                <p>
                                    4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific. <br /> Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.
                                </p>
                                <p>
                                    5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-9/12 mx-auto">
                <div className="">
                    <div className="my-3">
                        <img src={blog04} alt="" className="img-fluid" />
                        <div className="blog-item-content mt-5">
                            <div className="mb-3 flex gap-5">
                                <p className="capitalize flex items-center gap-3"><BsFillDiagram2Fill /> <span>Language</span></p>
                                <p className="capitalize flex items-center gap-3"><BsFillChatTextFill /><span>5 Comments</span></p>
                            </div>
                            <h2 className="text-xl my-5 lg:text-3xl md:text-3xl capitalize font-bold">How does NodeJS handle multiple requests at the same time?</h2>
                            <div className='flex flex-col gap-5'>
                                <p>
                                    Given a NodeJS application, since Node is single threaded, say if processing involves a Promise all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
                                    No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded.
                                </p>

                                <p>
                                    NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                                    NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
                                </p>
                                <h3 className='text-xl font-semibold'>How NodeJS handle multiple client requests?</h3>
                                <p>
                                    3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.
                                </p>
                                <p>
                                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module. <br /> A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.

                                    The cluster module allows easy creation of child processes that all share the same server ports.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
