import React from "react";
import { useFormik } from "formik";

const SimpleForm = () => {
  const initialValues = {
    name: "",
    email: "",
    channelName: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    let errors = {};

    if (!values.name) errors.name = "Name is Required";

    if (!values.email) {
      errors.email = "E-Mail is Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid Email format!";
    }

    if (!values.channelName) errors.channelName = "Channel Name is Required";

    return errors;
  };

  const returnForm = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  //console.log(returnForm.values);
  //console.log(returnForm.errors);

  return (
    <div>
      <form onSubmit={returnForm.handleSubmit}>
        <div className="form-control">
          {returnForm.errors.name && returnForm.touched.name ? (
            <div className="labelError">{returnForm.errors.name}</div>
          ) : null}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={returnForm.handleChange}
            onBlur={returnForm.handleBlur}
            value={returnForm.values.name}
          ></input>
        </div>

        <div className="form-control">
          {returnForm.errors.email && returnForm.touched.email ? (
            <div className="labelError">{returnForm.errors.email}</div>
          ) : null}
          <label htmlFor="email">E-Mail</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={returnForm.handleChange}
            onBlur={returnForm.handleBlur}
            value={returnForm.values.email}
          ></input>
        </div>

        <div className="form-control">
          {returnForm.errors.channelName && returnForm.touched.channelName ? (
            <div className="labelError">{returnForm.errors.channelName}</div>
          ) : null}
          <label htmlFor="channelName">Channel Name</label>
          <input
            type="text"
            id="channelName"
            name="channelName"
            onChange={returnForm.handleChange}
            onBlur={returnForm.handleBlur}
            value={returnForm.values.channelName}
          ></input>
        </div>
        <button id="btnSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
