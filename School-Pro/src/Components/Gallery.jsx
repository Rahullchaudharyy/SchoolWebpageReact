import React from 'react';

const photos = [
  { src: 'https://www.afd.fr/sites/afd/files/styles/visuel_principal/public/2021-06-06-05-55/ong-play-international-burundi-sport-developpement.jpg?itok=UgUUshSQ', description: 'Students participating in various sports events.' },
  { src: 'https://media.istockphoto.com/id/639407632/photo/excited-school-girls-during-chemistry-experiment.jpg?s=612x612&w=0&k=20&c=-W-vGm-bJ9XnxiCyFIxmLz3Asi0NJEiUjJoPShtBGLo=', description: 'Students presenting their science projects.' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/CulturalFest-FIUTS.jpg', description: 'Students performing in the cultural fest.' },
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaG9vbCUyMGNsYXNzcm9vbXxlbnwwfHwwfHx8MA%3D%3D', description: 'A glimpse of our interactive classrooms.' },
  { src: 'https://cdn.pixabay.com/photo/2014/10/14/20/14/library-488690_640.jpg', description: 'Students reading and studying in the school library.' },
];

const videos = [
  { src: 'school_tour.mp4', description: 'Virtual tour of Springdale Public School.' },
  { src: 'annual_function.mp4', description: 'Highlights from the Annual Function 2023.' },
];

const Gallery = () => {
  return (
    <div className="w-[100vw] overflow-x-hidden">
      <h1 className="text-center text-[4vmin] p-0 font-semibold">Secretary</h1>
      <div className="w-[100vw] p-[4vmin] flex justify-center items-center">
        <div className="text-center bg-gray-100 p-[2vmin] rounded-xl shadow-md w-[80vw] md:w-[40vw]">
          <h2 className="text-[3vmin] font-semibold">Lisa Wong</h2>
          <p className="text-[2.5vmin] text-gray-700">Grade 10</p>
        </div>
      </div>

      <h1 className="text-center text-[4vmin] p-0 font-semibold">Photo Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2vmin] p-[2vmin]">
        {photos.map((photo, index) => (
          <div key={index} className="relative w-full h-[30vmin] rounded-lg overflow-hidden shadow-md">
            <img src={photo.src} alt={photo.description} className="object-cover w-full h-full" />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-[1vmin] w-full">
              <p className="text-[2vmin]">{photo.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-center text-[4vmin] p-0 font-semibold">Video Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vmin] p-[2vmin]">
        {videos.map((video, index) => (
          <div key={index} className="relative w-full h-[30vmin] rounded-lg overflow-hidden shadow-md">
            <video controls className="object-cover w-full h-full">
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-[1vmin] w-full">
              <p className="text-[2vmin]">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
