import React from 'react';

const Blog = () => {
    return (
        <div className="container mx-auto text-left w-11/12 mt-10">
            <div className='mb-7'>
                <h2 className='text-3xl font-semibold mb-5'>What is The Purpose of React Router?</h2>
                <p>Routing is a process in which a user is directed to different pages based on their action or request. React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='mb-7'>
                <h2 className='text-3xl font-semibold mb-5'>How Does Context Api Works?</h2>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around without "prop-drilling". React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div className='mb-7'>
                <h2 className='text-3xl font-semibold mb-5'>What is useRef?</h2>
                <p>The useRef is a built-in React hook that accepts one argument as the initial value and returns a reference. It returns a mutable ref object. This object has a property called (.current). The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.</p>
            </div>
        </div>
    );
};

export default Blog;