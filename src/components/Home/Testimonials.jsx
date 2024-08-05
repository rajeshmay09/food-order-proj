import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review: "Fantastic products and great customer service!",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "I love the variety of products available. Highly recommend!",
    rating: 4,
  },
  {
    id: 3,
    name: "Alice Johnson",
    review: "Amazing quality and fast delivery. Will shop again.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          What Our Customers Say
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 max-w-xs"
            >
              <p className="text-gray-700 mb-4">"{testimonial.review}"</p>
              <div className="flex items-center">
                <span className="text-yellow-500">
                  {"⭐".repeat(testimonial.rating)}
                </span>
                <span className="text-gray-600 ml-2">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
