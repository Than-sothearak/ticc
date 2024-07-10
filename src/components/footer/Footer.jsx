import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h6 className="text-lg font-bold mb-2">Techno Innovation Challenge Cambodia</h6>
          <p className="text-sm">© 2024 TICC. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row mt-4 md:mt-0">

          <a href="/" className="text-gray-400 hover:text-gray-900 mx-2" aria-label="Home Link">Home</a>
          <a href="/information" className="text-gray-400 hover:text-gray-900 mx-2" aria-label="Home Link">Information and Schedule</a>
          <a href="/fqa" className="text-gray-400 hover:text-gray-900 mx-2" aria-label="FAQ Link">FAQ</a>
          <a href="/past-event" className="text-gray-400 hover:text-gray-900 mx-2" aria-label="Past Events Link">Past Events</a>
          <a href="/mentors" className="text-gray-400 hover:text-gray-900 mx-2" aria-label="Mentor Link">Mentor</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
