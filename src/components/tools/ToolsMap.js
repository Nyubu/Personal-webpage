import java_logo from './tools-img/java-logo.png'
import htmlcss_logo from './tools-img/htmlcss-logo.png'
import javascript_logo from './tools-img/javascript-logo.png'
import sql_logo from './tools-img/sql-logo.png'
import mongoDB_logo from './tools-img/mongodb-logo.png'
import postgres_logo from './tools-img/postgres-logo.png'
import react_logo from './tools-img/react-logo.png'
import flask_logo from './tools-img/flask-logo.png'
import python_logo from './tools-img/python-logo.png'
import postman_logo from './tools-img/postman-logo.png'
import jira_logo from './tools-img/jira-logo.png'
import jenkins_logo from './tools-img/jenkins-logo.png'
import vscode_logo from './tools-img/vscode-logo.png'
import netbeans_logo from './tools-img/netbeans-logo.png'
import git_logo from './tools-img/git-logo.png'
import graphql_logo from './tools-img/graphql-logo.png'
import docker_logo from './tools-img/docker-logo.png'
import redis_logo from './tools-img/redis-logo.png'
import urql_logo from './tools-img/urql-logo.png'
import typegraphql_logo from './tools-img/typegraphql-logo.png'
import typeorm_logo from './tools-img/typeorm-logo.png'
import typescript_logo from './tools-img/typescript-logo.png'
import nodejs_logo from './tools-img/nodejs-logo.png'
import nextjs_logo from './tools-img/nextjs-logo.png'
import chakraui_logo from './tools-img/chakra-logo.png'
import ec2_logo from './tools-img/ec2-logo.png'
import s3_logo from './tools-img/s3-logo.png'

export const languages = [
    {
        title: "Java",
        tooltip: `Java is a 
            general-purpose, class-based, object-oriented programming language designed for having lesser implementation dependencies.`,
        logo: java_logo
    },
    {
        title: "Python",
        tooltip: `Python is an interpreted, high-level and general-purpose programming language. 
            Python's design philosophy emphasizes code readability with its notable use of significant indentation.`,
        logo: python_logo
    },
    {
        title: "Javascript",
        tooltip: `JavaScript is a lightweight, interpreted, or just-in-time compiled programming language supporting object-oriented styles.
        It is most well-known as the scripting language for Web pages`,
        logo: javascript_logo
    },
    {
        title: "Typescript",
        tooltip: `TypeScript is an open-source language which builds on JavaScript by adding static type definitions. 
        Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly.`,
        logo: typescript_logo
    },
    {
        title: "HTML/CSS",
        tooltip: `Hypertext Markup Language (HTML) is the language for describing the structure of Web pages.
        Cascading Syle Sheets (CSS) is the language for describing the presentation of Web pages, including colors, layout, and fonts.`,
        logo: htmlcss_logo
    },
    {
        title: "SQL",
        tooltip: `Structured Query Language (SQL) is a domain-specific language used for designing and managing
        data held in a relational database management system`,
        logo: sql_logo
    },
    {
        title: "GraphQL",
        tooltip: `GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.`,
        logo: graphql_logo
    },
]

export const frameworks = [
    {
        title: "Next.js",
        tooltip: `Next.js is an open-source React front-end development web framework that enables functionality such as 
        server-side rendering and generating static websites for React based web applications.`,
        logo: nextjs_logo
    },
    {
        title: "Flask",
        tooltip: `Flask is a lightweight web application framework. It is designed to make getting started quick and easy, with the ability to scale up to complex applications`,
        logo: flask_logo
    },
    {
        title: "Express.js",
        tooltip: `Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.`,
        logo: nodejs_logo
    },
    {
        title: "TypegraphQL",
        tooltip: `TypeGraphQL is a framework for building GraphQL APIs in Node.js. 
        It makes use of TypeScript classes and decorators for defining GraphQL schema and types as well as resolvers.`,
        logo: typegraphql_logo
    },
]

export const libraries = [
    {
        title: "ReactJS",
        tooltip: `React is an open-source, front end, JavaScript library for building user interfaces or UI components. Design simple views for each state in your application, and 
        React will efficiently update and render just the right components when your data changes.`,
        logo: react_logo
    },
    {
        title: "Redis",
        tooltip: `Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker.`,
        logo: redis_logo
    },
    {
        title: "Typeorm",
        tooltip: `TypeORM is an ORM that supports both Active Record and Data Mapper patterns, allowing developers to
         write high quality, loosely coupled, scalable, maintainable applications the most productive way.`,
        logo: typeorm_logo
    },
    {
        title: "URQL",
        tooltip: `URQL is a highly customizable and versatile GraphQL client. 
        It's built to be both easy to use for newcomers to GraphQL, and extensible, to grow to 
        support dynamic single-app applications and highly customized GraphQL infrastructure.`,
        logo: urql_logo
    },
    {
        title: "Chakra-UI",
        tooltip: `Chakra UI is a simple, modular and accessible component library 
        that provides a set of accessible, reusable, and composable React components that you need to build front-end applications.`,
        logo: chakraui_logo
    },
]

export const databases = [
    {
        title: "MongoDB",
        tooltip: `MongoDB is a source-available cross-platform document-oriented database program. 
        Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.`,
        logo: mongoDB_logo
    },
    {
        title: "PostgreSQL",
        tooltip: `PostgreSQL is a powerful, open source object-relational database system (ORDBMS) that uses and extends the SQL 
        language combined with many features that safely store and scale the most complicated data workloads.`,
        logo: postgres_logo
    }
]

export const utility = [
    {
        title: "AWS EC2",
        tooltip: `Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. 
        It is designed to make web-scale cloud computing easier for developers.`,
        logo: ec2_logo
    },
    {
        title: "S3/Cloudfront",
        tooltip: `Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.
            Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users.`,
        logo: s3_logo
    },
    {
        title: "VS Code",
        tooltip: `Visual Studio Code is a freeware source-code editor with features to support debugging, syntax highlighting, 
        intelligent code completion, snippets, code refactoring, and embedded Git.`,
        logo: vscode_logo
    },
    {
        title: "Netbeans",
        tooltip: `NetBeans is an integrated development environment for Java. NetBeans allows applications to be developed from a set of modular software components called modules.`,
        logo: netbeans_logo
    },
    {
        title: "Jira",
        tooltip: `Jira is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management.`,
        logo: jira_logo
    },
    {
        title: "Jenkins",
        tooltip: `Jenkins is an open source automation server written in Java. It is used to continuously build and test software projects, enabling developers to set up a CI/CD environment. `,
        logo: jenkins_logo
    },
    {
        title: "Docker",
        tooltip: `Docker provides the ability to package and run an application in a loosely isolated environment called a container.
        Containers are lightweight and contain everything needed to run the application, allowing developers to work in standardized environments.`,
        logo: docker_logo
    },
    {
        title: "Postman",
        tooltip: ` Postman is a popular API client that makes it easy for developers to create, share, test and document APIs. 
        This is done by allowing users to create and save simple and complex HTTP/s requests, as well as read their responses.`,
        logo: postman_logo
    },
    {
        title: "Git",
        tooltip: `Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.`,
        logo: git_logo
    },
]