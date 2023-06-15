import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <h4 className="text-3xl font-semibold">
          Tell us the differences between uncontrolled and controlled components
        </h4>
        <h4 className="text-3xl font-semibold">
          How to validate React props using PropTypes
        </h4>
        <h4 className="text-3xl font-semibold">
          Tell us the difference between nodejs and express js.
        </h4>
        <h4 className="text-3xl font-semibold">
          What is a custom hook, and why will you create a custom hook?
        </h4>
      </div>
      <div className="mt-12">
        <h4 className="text-3xl font-semibold">
           How to validate React props using PropTypes
        </h4>
        <p>Ans: Uncontrolled components are managed by the DOM itself and do not rely on React state. In an uncontrolled component, form data is stored internally by the DOM, and you need to manually retrieve the data when needed using DOM references.On the other hand, controlled components are managed by React state. The value of each form input is controlled by the component's state, and any changes made to the inputs trigger event handlers that update the state accordingly.</p>
      </div>
      <div className="mt-12">
        <h4 className="text-3xl font-semibold">
        How to validate React props using PropTypes
        </h4>
        <p>Ans: Validate React props using PropTypes, you need to import the PropTypes module from the prop-types package. Once imported, you can define the prop types for your component by creating a static propTypes object within a class component or as a separate variable for functional components.</p>
      </div>
      <div className="mt-12">
        <h4 className="text-3xl font-semibold">
        How to validate React props using PropTypes
        </h4>
        <p>Ans: Validate React props using PropTypes, you need to import the PropTypes module from the prop-types package. Once imported, you can define the prop types for your component by creating a static propTypes object within a class component or as a separate variable for functional components.</p>
      </div>
    </div>
  );
};

export default Blogs;
