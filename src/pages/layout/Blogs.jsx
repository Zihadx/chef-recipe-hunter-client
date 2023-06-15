import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mt-16">
        Answer to the following question
      </h2>
      <div className="divider"></div>
      <div>
        <h4 className="text-3xl font-semibold mt-16">
          1. Tell us the differences between uncontrolled and controlled
          components?
        </h4>
        <h4 className="text-3xl font-semibold">
          2. How to validate React props using PropTypes?
        </h4>
        <h4 className="text-3xl font-semibold">
          3. Tell us the difference between nodejs and express js?
        </h4>
        <h4 className="text-3xl font-semibold">
          4. What is a custom hook, and why will you create a custom hook?
        </h4>
      </div>
      <div className="mt-12">
        <h4 className="text-3xl font-semibold">
          How to validate React props using PropTypes
        </h4>
        <p>
          Ans: Uncontrolled components are managed by the DOM itself and do not
          rely on React state. In an uncontrolled component, form data is stored
          internally by the DOM, and you need to manually retrieve the data when
          needed using DOM references.On the other hand, controlled components
          are managed by React state. The value of each form input is controlled
          by the component's state, and any changes made to the inputs trigger
          event handlers that update the state accordingly.
        </p>
      </div>
      <div className="mt-12">
        <h4 className="text-3xl font-semibold">
          How to validate React props using PropTypes
        </h4>
        <p>
          Ans: Validate React props using PropTypes, you need to import the
          PropTypes module from the prop-types package. Once imported, you can
          define the prop types for your component by creating a static
          propTypes object within a class component or as a separate variable
          for functional components.
        </p>
      </div>
      <div className="mt-12">
        <h4 className="text-3xl font-semibold">
          Tell us the difference between nodejs and express js.
        </h4>
        <p>
          Ans: Node.js is the underlying runtime environment that executes
          JavaScript on the server-side, while Express.js is a framework that
          runs on top of Node.js, providing a set of tools and conventions to
          simplify web application development.
        </p>
      </div>
      <div className="mt-12 mb-12">
        <h4 className="text-3xl font-semibold">
          What is a custom hook, and why will you create a custom hook?
        </h4>
        <p>
          Ans: a custom hook is a way to extract and share reusable logic in
          React. It helps to avoid code duplication and provides a modular
          approach to handling complex functionality across components. Creating
          a custom hook improves code organization, promotes reusability, and
          simplifies the development process.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
