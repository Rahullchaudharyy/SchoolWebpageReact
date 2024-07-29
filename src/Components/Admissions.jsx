import React from 'react'

const Admissions = () => {
  return (
    <div><div className="bg-gray-100 font-sans">
    <header className="bg-green-600 text-white py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold">Admissions</h1>
      </div>
    </header>
    <main className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Admission Process</h2>
        <p className="text-gray-700">
          Admission forms are available for download. Submit the completed form along with required documents at the school office.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Admission Criteria</h2>
        <p className="text-gray-700">
          Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Important Dates</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="bg-gray-200 p-3 rounded">Admission Form Availability: <span className="font-semibold">March 1st</span></li>
          <li className="bg-gray-200 p-3 rounded">Last Date for Submission: <span className="font-semibold">March 31st</span></li>
          <li className="bg-gray-200 p-3 rounded">Entrance Test: <span className="font-semibold">April 15th</span></li>
          <li className="bg-gray-200 p-3 rounded">Announcement of Results: <span className="font-semibold">April 30th</span></li>
        </ul>
      </div>
    </main>
    <footer className="bg-gray-800 text-white py-4 mt-6">
      <div className="container mx-auto text-center">
        &copy; 2024 Admissions Page. All rights reserved.
      </div>
    </footer>
  </div></div>
  )
}

export default Admissions