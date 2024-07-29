import React, { useState } from 'react';

const Gallery = () => {
  const [filterType, setFilterType] = useState('All');
  const [filterDate, setFilterDate] = useState('All');

  const galleryItems = [
    { type: 'Sports', date: '2023-01-20', title: 'Sports Day', image: 'https://www.afd.fr/sites/afd/files/styles/visuel_principal/public/2021-06-06-05-55/ong-play-international-burundi-sport-developpement.jpg?itok=UgUUshSQ', description: 'Students participating in various sports events.', description: 'Students participating in various sports events.' },
    { type: 'Science', date: '2023-02-15', title: 'Science Exhibition', image: 'https://media.istockphoto.com/id/639407632/photo/excited-school-girls-during-chemistry-experiment.jpg?s=612x612&w=0&k=20&c=-W-vGm-bJ9XnxiCyFIxmLz3Asi0NJEiUjJoPShtBGLo=', description: 'Students presenting their science projects.' },
    { type: 'Cultural', date: '2023-03-10', title: 'Cultural Fest', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/CulturalFest-FIUTS.jpg', description: 'Students performing in the cultural fest.' },
    { type: 'Classroom', date: '2023-04-05', title: 'Classroom', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaG9vbCUyMGNsYXNzcm9vbXxlbnwwfHwwfHx8MA%3D%3D', description: 'A glimpse of our interactive classrooms.' },
    { type: 'Library', date: '2023-05-25', title: 'Library', image: 'https://cdn.pixabay.com/photo/2014/10/14/20/14/library-488690_640.jpg', description: 'Students reading and studying in the school library.' },
    { type: 'School Tour', date: '2023-06-30', title: 'School Tour', video: 'school_tour.mp4', description: 'Virtual tour of Springdale Public School.' },
    { type: 'Annual Function', date: '2023-07-10', title: 'Annual Function', video: 'annual_function.mp4', description: 'Highlights from the Annual Function 2023.' },
  ];

  const filteredItems = galleryItems.filter(item => {
    return (filterType === 'All' || item.type === filterType) &&
           (filterDate === 'All' || item.date === filterDate);
  });

  return (
    <div className="w-[100vw] p-[4vmin] bg-gray-50">
      <h1 className="text-[5vmin] font-semibold text-center text-gray-900 mb-[4vmin]">Gallery</h1>
      
      <div className="flex justify-center mb-[4vmin]">
        <select className="mr-[2vmin] p-[1vmin] border border-gray-300 rounded" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="All">All Types</option>
          <option value="Sports">Sports</option>
          <option value="Science">Science</option>
          <option value="Cultural">Cultural</option>
          <option value="Classroom">Classroom</option>
          <option value="Library">Library</option>
          <option value="School Tour">School Tour</option>
          <option value="Annual Function">Annual Function</option>
        </select>
        <select className="p-[1vmin] border border-gray-300 rounded" value={filterDate} onChange={(e) => setFilterDate(e.target.value)}>
          <option value="All">All Dates</option>
          <option value="2023-01-20">2023-01-20</option>
          <option value="2023-02-15">2023-02-15</option>
          <option value="2023-03-10">2023-03-10</option>
          <option value="2023-04-05">2023-04-05</option>
          <option value="2023-05-25">2023-05-25</option>
          <option value="2023-06-30">2023-06-30</option>
          <option value="2023-07-10">2023-07-10</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-[4vmin] md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg bg-white shadow-lg">
            {item.image ? (
              <img src={item.image} alt={item.title} className="h-[24vmin] w-full object-cover" />
            ) : (
              <video src={item.video} controls className="h-[24vmin] w-full object-cover"></video>
            )}
            <div className="p-[3vmin]">
              <h3 className="text-[3vmin] font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-[2vmin] text-[2.5vmin] text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery


