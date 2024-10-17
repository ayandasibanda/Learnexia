import React from "react";

const Testimonials = () => {
    const reviews = [
        {
            name: "John Doe",
            feedback: "This platform has completely transformed the way I learn. The courses are well-structured and easy to follow!",
            rating: 5,
            image: "images/image6.jpg"
        },
        {
            name: "Jane Smith",
            feedback: "I love how I can learn at my own pace and track my progress. It’s been a game-changer for my career.",
            rating: 4,
            image: "images/image7.jpg"
        },
        {
            name: "Sam Wilson",
            feedback: "The quizzes and leaderboard keep me motivated. I’ve learned so much in such a short amount of time!",
            rating: 5,
            image: "images/image8.jpg"
        }
    ];

    return (
        <div className="bg-gray-50 px-6 py-20">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-indigo-600">What Our Students Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center text-center">
                        <img
                            src={review.image}
                            alt={review.name}
                            className="w-24 h-24 object-cover rounded-full mb-4"
                        />
                        <h3 className="text-xl font-semibold">{review.name}</h3>
                        <p className="text-sm text-gray-600 mb-4">"{review.feedback}"</p>
                        <div className="flex justify-center">
                            {[...Array(review.rating)].map((_, i) => (
                                <span key={i} className="text-yellow-500">★</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
