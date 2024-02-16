import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div >
        <label className="labelBox"  htmlFor="name">Name:</label>
        <input className="nameBox"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
        <label className="labelBox" htmlFor="email">Email:</label>
        <input className="mailBox"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
      <br/>
      <button className="submitBox" type="submit">Submit</button>
      
    </form>
  );

}

export default Form;
