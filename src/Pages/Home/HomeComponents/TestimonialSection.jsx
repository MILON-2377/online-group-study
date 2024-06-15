import "animate.css/animate.min.css";
import { useEffect } from "react";

const TestimonialsSection = () => {
  useEffect(() => {
    // Function to animate elements when they become visible
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeInUp");
          observer.unobserve(entry.target);
        }
      });
    };

    // Create a new Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.2, // trigger animation when 20% of the element is visible
    });

    // Observe the testimonials section
    observer.observe(document.querySelector(".testimonials-section"));

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []); // Run effect only once on component mount

  return (
    <section className="bg-white py-12 testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Testimonials</h2>
          <p className="text-gray-600">
            See what our users are saying about us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="text-lg font-bold mb-2">John Doe</div>
            <p className="text-gray-700">
              "This platform has made managing assignments a breeze. Highly
              recommended!"
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="text-lg font-bold mb-2">Jane Smith</div>
            <p className="text-gray-700">
              "I love the simplicity and effectiveness of this platform. It's
              exactly what I needed."
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="text-lg font-bold mb-2">David Johnson</div>
            <p className="text-gray-700">
              "The features here are well thought out and easy to use. Great
              job!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
