import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState({
    name: "",
    description: "",
    address: "",
    rentalPrice: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    amenities: "",
    contactNumber: "",
    email: "",
  });

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/propertyform/${id}`
        );
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error("Error fetching property:", error);
      }
    };

    fetchProperty();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({
      ...property,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/propertyform/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(property),
      });

      if (response.ok) {
        navigate("/"); // Redirect back to the home page after successful update
      } else {
        console.error("Failed to update property:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Edit Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Property Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={property.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Property Description</label>
          <textarea
            id="description"
            name="description"
            value={property.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={property.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rentalPrice">Rental Price</label>
          <input
            type="number"
            id="rentalPrice"
            name="rentalPrice"
            value={property.rentalPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="propertyType">Property Type</label>
          <select
            id="propertyType"
            name="propertyType"
            value={property.propertyType}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Condo">Condo</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="bedrooms">Number of Bedrooms</label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={property.bedrooms}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bathrooms">Number of Bathrooms</label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={property.bathrooms}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amenities">Amenities</label>
          <input
            type="text"
            id="amenities"
            name="amenities"
            value={property.amenities}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Phone Number</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={property.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={property.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Property</button>
      </form>
    </div>
  );
};

export default EditProperty;
