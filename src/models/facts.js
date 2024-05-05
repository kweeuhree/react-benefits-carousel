const facts = [
    {
        title: 'Declarative Syntax',
        text: 'React uses a declarative syntax that makes it easier to understand and reason about your code. You describe how your UI should look based on its current state, and React takes care of updating the DOM efficiently to match that state',
        picture: '',
        url: ''
    },     {
        title: 'Component-Based Architecture',
        text: 'React promotes a component-based architecture, allowing you to break down your UI into reusable and composable components. This makes your code more modular, maintainable, and easier to test',
        picture: '',
        url: ''
    },     {
        title: 'Virtual DOM',
        text: 'React uses a virtual DOM to optimize DOM updates. Instead of directly manipulating the DOM, React creates a lightweight in-memory representation of the DOM and computes the most efficient way to update the actual DOM. This results in faster rendering and better performance, especially for complex and dynamic UIs',
        picture: '',
        url: ''
    }, {
        title: 'One-Way Data Binding',
        text: 'React follows a unidirectional data flow, where data flows from parent components to child components via props. This simplifies data management and reduces the likelihood of bugs caused by inconsistent state',
        picture: '',
        url: ''
    },     {
        title: 'JSX',
        text: 'React introduces JSX, a syntax extension that allows you to write HTML-like code directly within JavaScript. JSX makes it easier to write and visualize UI components, as well as enabling the use of JavaScript expressions and logic within your templates',
        picture: '',
        url: ''
    },     {
        title: 'Community and Ecosystem',
        text: 'React has a large and active community, with many libraries, tools, and resources available to help you build applications more efficiently. This includes state management libraries like Redux, routing solutions like React Router, and UI component libraries like Material-UI',
        picture: '',
        url: ''
    }, {
        title: 'Performance Optimization',
        text: 'React provides tools and techniques for optimizing the performance of your applications, such as shouldComponentUpdate, PureComponent, and memoization. These can help minimize unnecessary re-renders and improve the overall performance of your UI',
        picture: '',
        url: ''
    },     {
        title: 'Server-Side Rendering (SSR) and Static Site Generation (SSG)',
        text: 'React can be used for server-side rendering (SSR) and static site generation (SSG), allowing you to pre-render your React components on the server and improve SEO, performance, and initial load times',
        picture: '',
        url: ''
    },     {
        title: 'Mobile Development',
        text: 'React can be used to build native mobile applications using React Native. This enables you to leverage your existing React skills and codebase to target multiple platforms, including iOS and Android',
        picture: '',
        url: ''
    }
];

export default facts;