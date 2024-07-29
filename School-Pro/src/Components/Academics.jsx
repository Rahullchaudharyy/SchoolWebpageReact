// eslint-disable-next-line no-unused-vars
import React from 'react'

const Academics = () => {
  return (
    <div className='h-auto w-full'>  
       <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold">Curriculum Overview</h1>
        </div>
    </header>
    <main className="container mx-auto p-6">
        <div className="flex flex-wrap gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1 max-w-xs">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Primary (Grades 1-5)</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li className="bg-gray-200 p-2 rounded">English</li>
                    <li className="bg-gray-200 p-2 rounded">Mathematics</li>
                    <li className="bg-gray-200 p-2 rounded">Science</li>
                    <li className="bg-gray-200 p-2 rounded">Social Studies</li>
                    <li className="bg-gray-200 p-2 rounded">Art</li>
                    <li className="bg-gray-200 p-2 rounded">Physical Education</li>
                </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1 max-w-xs">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Secondary (Grades 6-10)</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li className="bg-gray-200 p-2 rounded">English</li>
                    <li className="bg-gray-200 p-2 rounded">Mathematics</li>
                    <li className="bg-gray-200 p-2 rounded">Science (Physics, Chemistry, Biology)</li>
                    <li className="bg-gray-200 p-2 rounded">Social Studies</li>
                    <li className="bg-gray-200 p-2 rounded">Computer Science</li>
                    <li className="bg-gray-200 p-2 rounded">Physical Education</li>
                    <li className="bg-gray-200 p-2 rounded">Art</li>
                </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1 max-w-xs">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Senior Secondary (Grades 11-12)</h2>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Science Stream</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li className="bg-gray-200 p-2 rounded">Physics</li>
                    <li className="bg-gray-200 p-2 rounded">Chemistry</li>
                    <li className="bg-gray-200 p-2 rounded">Biology</li>
                    <li className="bg-gray-200 p-2 rounded">Mathematics</li>
                    <li className="bg-gray-200 p-2 rounded">Computer Science</li>
                    <li className="bg-gray-200 p-2 rounded">English</li>
                </ul>
                <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">Commerce Stream</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li className="bg-gray-200 p-2 rounded">Accountancy</li>
                    <li className="bg-gray-200 p-2 rounded">Business Studies</li>
                    <li className="bg-gray-200 p-2 rounded">Economics</li>
                    <li className="bg-gray-200 p-2 rounded">Mathematics</li>
                    <li className="bg-gray-200 p-2 rounded">English</li>
                </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1 max-w-xs">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Teaching Methodologies</h2>
                <p className="text-gray-700">We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1 max-w-xs">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Educational Resources</h2>
                <p className="text-gray-700">Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
            </div>
        </div>
    </main>
    <footer className="bg-gray-800 text-white py-4 mt-6">
        <div className="container mx-auto text-center">
            &copy; 2024 Curriculum Overview. All rights reserved.
        </div>
    </footer>
    </div>
  )
}

export default Academics