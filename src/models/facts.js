const reactBackground = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png';

const facts = [
    {
        title: 'Declarative Syntax',
        text: 'React uses a declarative syntax that makes it easier to understand and reason about your code. You describe how your UI should look based on its current state, and React takes care of updating the DOM efficiently to match that state',
        picture: reactBackground,
        url: 'https://www.geeksforgeeks.org/difference-between-imperative-and-declarative-programming/',
        shortcut: 'Difference between imperative and declarative programming'
    },     {
        title: 'Component-Based Architecture',
        text: 'React promotes a component-based architecture, allowing you to break down your UI into reusable and composable components. This makes your code more modular, maintainable, and easier to test',
        picture: 'https://miro.medium.com/v2/resize:fit:1400/1*p4aCH2hBCzcgCOaNJ9slxA.png',
        url: 'https://en.wikipedia.org/wiki/Component-based_software_engineering',
        shortcut: 'Component-based software engineering'
    },     {
        title: 'Virtual DOM',
        text: 'React uses a virtual DOM to optimize DOM updates. Instead of directly manipulating the DOM, React creates a lightweight in-memory representation of the DOM and computes the most efficient way to update the actual DOM. This results in faster rendering and better performance, especially for complex and dynamic UIs',
        picture: 'https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1649655403381%2FYQwkgNyh-.png%3Fw%3D1200%26auto%3Dcompress%2Cformat%26format%3Dwebp%26fm%3Dpng',
        url: 'https://www.geeksforgeeks.org/reactjs-virtual-dom/',
        shortcut: 'ReactJS Virtual DOM'
    }, {
        title: 'One-Way Data Binding',
        text: 'React follows a unidirectional data flow, where data flows from parent components to child components via props. This simplifies data management and reduces the likelihood of bugs caused by inconsistent state',
        picture: 'https://www.safetysign.com/images/source/large-images/G2725.jpg',
        url: 'https://www.geeksforgeeks.org/difference-between-one-way-binding-and-two-way-binding/',
        shortcut: 'Difference between One-way Binding and Two-way Binding'
    },     {
        title: 'JSX',
        text: 'React introduces JSX, a syntax extension that allows you to write HTML-like code directly within JavaScript. JSX makes it easier to write and visualize UI components, as well as enabling the use of JavaScript expressions and logic within your templates',
        picture: 'https://bs-uploads.toptal.io/blackfish-uploads/components/seo/4632842/og_image/optimized/0618-JSX-Waldek_Social__1_-2a87f70323e4a6a0d12f664ec62bef4c.png',
        url: 'https://react.dev/learn/writing-markup-with-jsx',
        shortcut: 'Writing Markup with JSX'
    },     {
        title: 'Community and Ecosystem',
        text: 'React has a large and active community, with many libraries, tools, and resources available to help you build applications more efficiently. This includes state management libraries like Redux, routing solutions like React Router, and UI component libraries like Material-UI',
        picture: 'https://miro.medium.com/v2/resize:fit:1400/1*r3l8tVxKgkq3IvVSB6A0bg.jpeg',
        url: 'https://dev.to/avinashvagh/react-ecosystem-in-2024-418k',
        shortcut: 'React Ecosystem in 2024'
    }, {
        title: 'Performance Optimization',
        text: 'React provides tools and techniques for optimizing the performance of your applications, such as shouldComponentUpdate, PureComponent, and memoization. These can help minimize unnecessary re-renders and improve the overall performance of your UI',
        picture: 'https://bagisto.com/wp-content/uploads/2020/06/performance-optimize-guide.png',
        url: 'https://www.freecodecamp.org/news/react-performance-optimization-techniques/',
        shortcut: 'React Optimization Techniques'
    },     {
        title: 'Server-Side Rendering (SSR) and Static Site Generation (SSG)',
        text: 'React can be used for server-side rendering (SSR) and static site generation (SSG), allowing you to pre-render your React components on the server and improve SEO, performance, and initial load times',
        picture: reactBackground,
        url: 'https://dev.to/ebereplenty/server-side-rendering-ssr-vs-static-site-generation-ssg-214k',
        shortcut: 'Server Side Rendering (SSR) Vs Static Site Generation (SSG)'
    },     {
        title: 'Mobile Development',
        text: 'React can be used to build native mobile applications using React Native. This enables you to leverage your existing React skills and codebase to target multiple platforms, including iOS and Android',
        picture: 'https://media.licdn.com/dms/image/C4D12AQGVl4X6rA0uew/article-cover_image-shrink_720_1280/0/1652265949718?e=2147483647&v=beta&t=tK3M3JAtVLUc85-myII1U1p1KMqmPRSi_KL9CcG-yfk',
        url: 'https://reactnative.dev/docs/getting-started',
        shortcut: 'Introduction to React Native'
    }
];

export default facts;