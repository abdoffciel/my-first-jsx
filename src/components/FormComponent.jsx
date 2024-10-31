import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Form.css';

const FormComponent = ({ onComplete }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    gmail: "",
    tel: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.lastName) formErrors.lastName = "Last Name is required";
    if (!formData.gmail) formErrors.gmail = "Email is required";
    if (!formData.tel) formErrors.tel = "Phone Number is required";
    if (!formData.password) formErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      formErrors.confirmPassword = "Passwords do not match";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleShopNew = () => {
    if (validateForm()) {
      onComplete(); // Notify form completion
      navigate("/listProd", { state: { name: formData.name, lastName: formData.lastName } });
    }
  };

  return (
    <div>
      <form>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        {errors.name && <p className="error">{errors.name}</p>}
        
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
        
        <input type="email" name="gmail" placeholder="Gmail" value={formData.gmail} onChange={handleChange} />
        {errors.gmail && <p className="error">{errors.gmail}</p>}
        
        <input type="tel" name="tel" placeholder="Phone Number" value={formData.tel} onChange={handleChange} />
        {errors.tel && <p className="error">{errors.tel}</p>}
        
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        {errors.password && <p className="error">{errors.password}</p>}
        
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        <button type="button" onClick={handleShopNew}>Shop New</button>
      </form>
    </div>
  );
};

export default FormComponent;
