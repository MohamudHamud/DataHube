import React from 'react';

// // Import Tailwind CSS classes
// import 'tailwindcss/tailwind.css';

// Header component
const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">Ethiopia DataHub</h1>
      </div>
    </header>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 py-4">
      <div className="container mx-auto">
        <p className="text-center">© 2024 DataHub. All rights reserved for Group 10.</p>
      </div>
    </footer>
  );
};

// Home page component
const Home = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto my-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to Ethiopia DataHub!</h2>
        <p className="text-lg">
            for Dominestration 
        Ethiopia DataHub is your one-stop destination for all things data. Whether you're looking for data
          analysis tools, data visualization resources, or data management solutions, we've got you covered.
        </p>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">Our Services</h3>
          <ul className="list-disc ml-6">
            <li>Data Analysis</li>
            <li>Data Visualization</li>
            <li>Data Management</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
