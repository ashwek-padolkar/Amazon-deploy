import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/auth"; // Make sure you have this context for auth

const ReviewForm = ({ productId, fetchReviews }) => {
  const [auth] = useAuth(); // Get auth details (token, user)
  const [rating, setRating] = useState(1); // Default rating
  const [comment, setComment] = useState(""); // Default comment

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `/api/v1/product/${productId}/review`,
        { rating, comment },
        {
          headers: { Authorization: `Bearer ${auth.token}` }, // Use the auth token
        }
      );
      toast.success("Review added successfully");
      setRating(1);
      setComment("");
      fetchReviews(); // Refresh reviews after submission
    } catch (error) {
      toast.error("Failed to add review");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <div>
        <label>Rating:</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          style={{ marginRight: "10px" }}
        >
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="4"
          style={{ width: "100%", marginTop: "10px" }}
        />
      </div>
      <button type="submit" style={{ marginTop: "10px" }}>
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
