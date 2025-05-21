const Reviews = () => {
    const reviews = [
        {
        name: "John Doe",
        review: "This cocktail is amazing! I loved every sip.",
        rating: 5,
        },
        {
        name: "Jane Smith",
        review: "A delightful experience, but could use a bit more sweetness.",
        rating: 4,
        },
        {
        name: "Alice Johnson",
        review: "Not my favorite, but I appreciate the creativity.",
        rating: 3,
        },
    ];
    
    return (
        <div className="page-container">
        <h2 className="page-title">Customer Reviews</h2>
        {reviews.map((review, index) => (
            <div key={index} className="review-card">
            <h3>{review.name}</h3>
            <p>{review.review}</p>
            <p>Rating: {review.rating} stars</p>
            </div>
        ))}
        </div>
    );
}
export default Reviews;