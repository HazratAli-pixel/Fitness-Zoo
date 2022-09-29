import React from 'react';
import './QuessionPart.css';

const QuessionPart = () => {
    return (
        <div className='container'>
            <div className='row bg-light rounded-3 m-0'>
                <div className="col-12 p-3 text-start">
                    <h3 className='bg-dark text-white rounded-3 text-center p-2'>Question and Answer</h3>
                    <div className='qColor p-2 mb-2'>
                        <h5>How does react work?</h5>
                    </div>
                    <div className='aColor p-3'>
                        <p>One of the biggest advantages of using React is that you can <strong>infuse HTML code with JavaScript.</strong> Users can create a representation of a DOM node by declaring the Element function in React. The code below contains a combination of HTML and JavaScript:
                            <br /> JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.
                            <br />A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page.
                        </p>
                    </div>
                </div>
                <div className="col-12 p-3 text-start">
                    <div className='qColor p-2 mb-2'>
                        <h5>Difference between props and state</h5>
                    </div>
                    <div className='aColor p-3'>
                        <p><strong>Props: </strong>Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>
                        <p><strong>State: </strong>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</p>
                    </div>
                </div>
                <div className="col-12 p-3 text-start">
                    <div className='qColor p-2 mb-2'>
                        <h5>Use of useeffect accept data load</h5>
                    </div>
                    <div className='aColor p-3'>
                        <p>Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you’re used to calling these operations “side effects” (or just “effects”), you’ve likely performed them in your components before.</p>
                        <p>Sometimes, we want to run some additional code after React has updated the DOM. Network requests, manual DOM mutations, and logging are common examples of effects that don’t require a cleanup. We say that because we can run them and immediately forget about them. Let’s compare how classes and Hooks let us express such side effects.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuessionPart;