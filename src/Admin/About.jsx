import React from 'react';

function About() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-5xl w-full mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">About Flora Flow</h2>
          <h3 className="text-lg md:text-xl font-semibold text-gray-600 mt-2">
            Cultivating a Greener Planet, One Plant at a Time
          </h3>
        </div>
        <p className="text-gray-700 text-justify mt-4 leading-7">
          Welcome to Flora Flow, a platform dedicated to bringing nature closer to you while promoting sustainability and green living.
          At Flora Flow, we believe that plants are more than just decorative elements—they are a source of life, beauty, and well-being.
          Whether you're a seasoned gardener or someone looking to add a touch of green to your home or workspace, Flora Flow is here to make it
          easy and enjoyable for everyone.
        </p>

        {/* Mission Section */}
        <div className="mt-8">
          <h3 className="text-2xl md:text-3xl font-bold text-green-700">Our Mission</h3>
          <p className="text-gray-700 mt-2 leading-7">
            To inspire a greener, healthier planet by making plants accessible, affordable, and a natural part of everyday life.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700">What We Offer</h2>

          {/* For Customers */}
          <div className="mt-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-600">For Customers:</h3>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>
                <strong>Comprehensive Product Details:</strong> Get all the information you need about plants, including their type, height,
                care instructions, and growth characteristics.
              </li>
              <li>
                <strong>High-Quality Images:</strong> View detailed photos of each plant to make informed decisions.
              </li>
              <li>
                <strong>Customer Reviews:</strong> Share your experiences and read others' reviews to find the perfect plant for your space.
              </li>
              <li>
                <strong>Real-Time Chat with Sellers:</strong> Powered by Socket.IO, customers can connect directly with sellers for advice or
                inquiries.
              </li>
              <li>
                <strong>Secure Payment Options:</strong> Enjoy seamless transactions via GPay, PhonePe, UPI, credit/debit cards, or net banking.
              </li>
              <li>
                <strong>Order Tracking:</strong> Stay updated with real-time order status and delivery progress.
              </li>
              <li>
                <strong>Secure Authentication:</strong> Your account and data are protected with JWT (JSON Web Token) authentication.
              </li>
            </ul>
          </div>

          {/* For Sellers */}
          <div className="mt-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-600">For Sellers:</h3>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>
                <strong>Add Products with Ease:</strong> Upload photos, set pricing, and provide detailed descriptions, including plant care
                tips.
              </li>
              <li>
                <strong>Inventory & Billing Management:</strong> Manage stock levels and automate billing for a hassle-free experience.
              </li>
              <li>
                <strong>Set Discounts & Promotions:</strong> Attract customers with customized pricing and special offers.
              </li>
              <li>
                <strong>Real-Time Notifications:</strong> Receive alerts for new orders, payments, and customer inquiries.
              </li>
              <li>
                <strong>Customer Interaction:</strong> Build relationships through real-time chats, creating a personalized experience for
                buyers.
              </li>
              <li>
                <strong>Secure Seller Accounts:</strong> Robust authentication mechanisms ensure the safety of your business and data.
              </li>
            </ul>
          </div>
        </div>

        {/* Why Choose Flora Flow */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700">Why Choose Flora Flow?</h2>
          <p className="text-gray-700 mt-4 leading-7">
            Flora Flow isn’t just a marketplace—it’s a community of plant lovers, environmental enthusiasts, and sustainable living advocates.
            By choosing Flora Flow, you’re not only enriching your life with the beauty of plants but also contributing to a global effort to
            create a greener, more sustainable future.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700">Join the Green Revolution</h2>
          <p className="text-gray-700 mt-4 leading-7">
            Whether you're looking to beautify your surroundings, support small-scale sellers, or contribute to environmental well-being, Flora
            Flow is your trusted partner. Let’s work together to make greenery an essential part of our lives and create a thriving, sustainable
            community.
          </p>
          <p className="mt-4 text-green-700 font-semibold">
            Discover Flora Flow today. Cultivate green, inspire change.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
3