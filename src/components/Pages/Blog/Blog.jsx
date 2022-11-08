import React from 'react';
import blog01 from '../../../assets/blog/SQL-VS-NoSQL-1.jpg'
import { BsFillChatTextFill, BsFillDiagram2Fill, BsFillClockFill } from "react-icons/bs";
const Blog = () => {
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
                                <p className="capitalize flex items-center gap-3 text-xl font-medium"><BsFillDiagram2Fill /> <span>Database</span></p>
                                <p className="capitalize flex items-center gap-3 text-xl font-medium"><BsFillChatTextFill /><span>5 Comments</span></p>
                                <p className="capitalize flex items-center gap-3 text-xl font-medium"><BsFillClockFill /><span>9th January 2022</span></p>
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
                <div className="">
                    <div className="my-3">
                        <img src={blog01} alt="" className="img-fluid" />
                        <div className="blog-item-content mt-5">
                            <div className="mb-3 flex gap-5">
                                <p className="capitalize flex items-center gap-3 text-xl font-medium"><BsFillDiagram2Fill /> <span>Database</span></p>
                                <p className="capitalize flex items-center gap-3 text-xl font-medium"><BsFillChatTextFill /><span>5 Comments</span></p>
                                <p className="capitalize flex items-center gap-3 text-xl font-medium"><BsFillClockFill /><span>9th January 2022</span></p>
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
                <div className="">
                    <div className="my-3">
                        <img src={blog01} alt="" className="img-fluid" />
                        <div className="blog-item-content mt-5">
                            <div className="mb-3 flex gap-5">
                                <p className="capitalize flex items-center gap-3 text-xl font-medium"><BsFillDiagram2Fill /> <span>Database</span></p>
                                <p className="capitalize flex items-center gap-3 text-xl font-medium"><BsFillChatTextFill /><span>5 Comments</span></p>
                                <p className="capitalize flex items-center gap-3 text-xl font-medium"><BsFillClockFill /><span>9th January 2022</span></p>
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
                <div className="">
                    <div className="my-3">
                        <img src={blog01} alt="" className="img-fluid" />
                        <div className="blog-item-content mt-5">
                            <div className="mb-3 flex gap-5">
                                <p className="capitalize flex items-center gap-3 text-xl font-medium"><BsFillDiagram2Fill /> <span>Database</span></p>
                                <p className="capitalize flex items-center gap-3 text-xl font-medium"><BsFillChatTextFill /><span>5 Comments</span></p>
                                <p className="capitalize flex items-center gap-3 text-xl font-medium"><BsFillClockFill /><span>9th January 2022</span></p>
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

        </div>
    );
};

export default Blog;
