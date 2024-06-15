import "animate.css/animate.min.css";
import TestimonialsSection from "./HomeComponents/TestimonialSection";

const Home = () => {
  return (
    <div>
      <div className="bg-gray-100">
        {/* Banner Section */}
        <section className="bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
            <p className="text-lg">
              This is a place where you can manage your assignments efficiently
              and effectively.
            </p>
          </div>
        </section>

        {/* Feature Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Features</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md animate__animated animate__fadeInUp">
                <h3 className="text-xl font-bold mb-2">Feature One</h3>
                <p className="text-gray-700">Description of feature one.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md animate__animated animate__fadeInUp animate__delay-1s">
                <h3 className="text-xl font-bold mb-2">Feature Two</h3>
                <p className="text-gray-700">Description of feature two.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md animate__animated animate__fadeInUp animate__delay-2s">
                <h3 className="text-xl font-bold mb-2">Feature Three</h3>
                <p className="text-gray-700">Description of feature three.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md animate__animated animate__fadeInUp animate__delay-3s">
                <h3 className="text-xl font-bold mb-2">Feature Four</h3>
                <p className="text-gray-700">Description of feature four.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md animate__animated animate__fadeInUp animate__delay-4s">
                <h3 className="text-xl font-bold mb-2">Feature Five</h3>
                <p className="text-gray-700">Description of feature five.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md animate__animated animate__fadeInUp animate__delay-5s">
                <h3 className="text-xl font-bold mb-2">Feature Six</h3>
                <p className="text-gray-700">Description of feature six.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4 flex flex-col ">
              <div>
                <details className="collapse bg-white ">
                  <summary className="collapse-title text-xl font-medium">
                    <h3 className="text-lg font-bold mb-2">
                      What is this platform about?
                    </h3>
                  </summary>
                  <div className="collapse-content">
                    <p className="text-gray-700">
                      This platform helps you manage your assignments
                      effectively.
                    </p>
                  </div>
                </details>
              </div>
              <div>
                <details className="collapse bg-white ">
                  <summary className="collapse-title text-xl font-medium">
                    <h3 className="text-lg font-bold mb-2">
                      How can I register?
                    </h3>
                  </summary>
                  <div className="collapse-content">
                    <p className="text-gray-700">
                      You can register by clicking the 'Register' link in the
                      navbar.
                    </p>
                  </div>
                </details>
              </div>
              <div>
                <details className="collapse bg-white ">
                  <summary className="collapse-title text-xl font-medium">
                    <h3 className="text-lg font-bold mb-2">
                      How can I log in?
                    </h3>
                  </summary>
                  <div className="collapse-content">
                    <p className="text-gray-700">
                      You can log in by clicking the 'Login' link in the navbar.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* testimonial section */}
        <div className="mb-9">
          <TestimonialsSection></TestimonialsSection>
        </div>
        {/* Footer */}
        <footer className="bg-white min-h-[300px] w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* Facebook Icon */}
                      <path d="M22.675 0h-21.35C.599 0 0 .598 0 1.337v21.326C0 23.403.599 24 1.325 24h11.481v-9.294H9.847V11.24h2.959V8.659c0-2.919 1.792-4.513 4.406-4.513 1.253 0 2.33.093 2.645.135v3.068l-1.816.001c-1.425 0-1.699.676-1.699 1.667v2.185h3.396l-.443 3.466h-2.953V24h5.787C23.402 24 24 23.403 24 22.675V1.326C24 .598 23.402 0 22.675 0z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* Twitter Icon */}
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775a4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195A4.92 4.92 0 0 0 16.845 4c-2.717 0-4.92 2.203-4.92 4.919 0 .386.045.762.128 1.124C7.691 9.84 4.066 7.874 1.64 4.897a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.903 4.903 0 0 1-2.229-.616v.062c0 2.386 1.698 4.374 3.95 4.823a4.928 4.928 0 0 1-2.224.084c.626 1.955 2.444 3.377 4.6 3.418A9.867 9.867 0 0 1 0 20.292a13.94 13.94 0 0 0 7.548 2.212c9.054 0 14.002-7.496 14.002-13.986 0-.213-.004-.425-.014-.636A9.935 9.935 0 0 0 24 4.557z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* LinkedIn Icon */}
                      <path d="M22.23 0H1.77C.79 0 0 .77 0 1.75v20.49C0 23.23.77 24 1.75 24h20.49c.98 0 1.77-.77 1.77-1.75V1.75C24 .77 23.23 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zm-1.77-13.07c-1.13 0-2.04-.92-2.04-2.04 0-1.12.91-2.04 2.04-2.04s2.04.92 2.04 2.04c0 1.12-.91 2.04-2.04 2.04zm14.23 13.07h-3.53v-5.92c0-1.41-.03-3.23-1.97-3.23-1.97 0-2.27 1.54-2.27 3.12v6.03h-3.53V9h3.39v1.56h.05c.47-.88 1.62-1.81 3.33-1.81 3.57 0 4.23 2.34 4.23 5.38v6.32z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-700">
              &copy; 2024 Your Company Name. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
