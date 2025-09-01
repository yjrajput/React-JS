import React, { useState } from 'react'

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target; 

    setFormData((prev) => ({
      ...prev,
      [name]: value 
    }));
  };

  return (
    <div>
      <h1>Name: {formData.name}</h1>
      <p>Age: {formData.age}</p>

      <form>
        <label>
          Name: 
          <input 
            type="text" 
            name="name"   
            placeholder="Enter your name" 
            value={formData.name}  
            onChange={handleOnChange} 
          />
        </label>
        <br />
        <label>
          Age: 
          <input 
            type="text" 
            name="age"   
            placeholder="Enter your age" 
            value={formData.age}  
            onChange={handleOnChange} 
          />
        </label>
      </form>
    </div>
  );
};

export default Profile;
