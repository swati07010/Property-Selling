import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem("auth");
    setIsAuthenticated(authStatus === "true");

    const fetchProperties = async () => {
      try {
        const response = await fetch("http://localhost:5000/propertyform");
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit-property/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/propertyform/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setProperties(properties.filter((property) => property._id !== id));
        console.log(`Property with ID: ${id} deleted successfully`);
      } else {
        console.error("Failed to delete property:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <h2 className="ribbon w-75">Properties</h2>
      </div>
      <div className="property-list">
        {properties.length > 0 ? (
          properties.map((property) => (
            <div key={property._id} className="property-card">
              <div className="AllStar ">
                <div className="ribbon_new"></div>
                <i className="bi bi-star-fill px-1"></i>
                <i className="bi bi-star-fill px-1"></i>
                <i className="bi bi-star-fill px-1"></i>
                <i className="bi bi-star-fill px-1"></i>
                <i className="bi bi-star-fill px-1"></i>
              </div>

              <h3>
                <strong>Owner Name:</strong>
                {property.name}
              </h3>
              <p>
                <strong>Description:</strong> {property.description}
              </p>
              <p>
                <strong>Address:</strong> {property.address}
              </p>
              <p>
                <strong>Rental Price:</strong> {property.rentalPrice}
              </p>
              <p>
                <strong>Type:</strong> {property.propertyType}
              </p>
              <p>
                <strong>Bedrooms:</strong> {property.bedrooms}
              </p>
              <p>
                <strong>Bathrooms:</strong> {property.bathrooms}
              </p>
              <p>
                <strong>Amenities:</strong> {property.amenities}
              </p>
              <p>
                <strong>Contact Number:</strong> +91 4356728919
              </p>
              <div className="actions">
                {isAuthenticated && (
                  <>
                    <button onClick={() => handleEdit(property._id)}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(property._id)}>
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No properties available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
