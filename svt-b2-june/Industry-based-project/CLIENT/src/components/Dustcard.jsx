import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Dustcard = ({ dustbin, onDelete, onEdit }) => {
  const imageurl = `http://localhost:6500/uploads/${dustbin.image}`;
  const navigate = useNavigate();
  // Location-based price logic
  const getPriceByLocation = (location) => {
    const prices = {
      "Kolkata": 100,
      "Delhi": 150,
      "Mumbai": 200,
      "Default": 120
    };
    return prices[location] || prices["Default"];
  };

  const handleBooking = () => {
    const price = getPriceByLocation(dustbin.location) * 100; // in paisa for Razorpay

    const options = {
      key: "rzp_test_R5tRGCqVmfzdxD", // Razorpay test key
      amount: price,
      currency: "INR",
      name: "Dustbin Booking",
      description: `Booking for ${dustbin.location}`,
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        navigate('/dashboard');
      },
      prefill: {
        name: "Subhojit Santra",
        email: "raj@example.com",
        contact: "6289619338",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <Container className="my-4">
      <Card style={{ width: "22rem" }}>
        <Card.Img src={imageurl} alt="img" style={{ width: "200px" }} />
        <Card.Body>
          <Card.Title>{dustbin.location}</Card.Title>
          <Card.Text>{dustbin.status}</Card.Text>

          <Button
            variant="danger"
            className="me-2"
            onClick={() => onDelete(dustbin._id)}
          >
            Delete
          </Button>

          <Button
            variant="warning"
            className="me-2"
            onClick={() => onEdit(dustbin)}
          >
            Edit
          </Button>

          <Button
            variant="success"
            onClick={handleBooking}
          >
            Book
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dustcard;
