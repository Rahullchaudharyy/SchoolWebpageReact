import React from 'react';

const Students = () => {
  const SectionData = [
    { name: 'Music', image: 'https://via.placeholder.com/400x300?text=Music' },
    { name: 'Dance', image: 'https://via.placeholder.com/400x300?text=Dance' },
    { name: 'Drama', image: 'https://via.placeholder.com/400x300?text=Drama' },
    { name: 'Art', image: 'https://via.placeholder.com/400x300?text=Art' },
    { name: 'Sports', image: 'https://via.placeholder.com/400x300?text=Sports' },
    { name: 'Robotics', image: 'https://via.placeholder.com/400x300?text=Robotics' },
    { name: 'Debate Club', image: 'https://via.placeholder.com/400x300?text=Debate+Club' },
    { name: 'Science Club', image: 'https://via.placeholder.com/400x300?text=Science+Club' },
  ]
  const SocietyData =[
    { name: 'Literary Society', image: 'https://via.placeholder.com/400x300?text=Literary+Society' },
    { name: 'Environmental Club', image: 'https://via.placeholder.com/400x300?text=Environmental+Club' },
    { name: 'Astronomy Club', image: 'https://via.placeholder.com/400x300?text=Astronomy+Club' },
    { name: 'Coding Club', image: 'https://via.placeholder.com/400x300?text=Coding+Club' },
  ]
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <h1 className="text-center text-4xl font-semibold text-gray-900 mb-8">Life at Springdale</h1>

      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Extracurricular Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SectionData.map(activity => (
            <div key={activity.name} className="relative rounded-lg shadow-lg overflow-hidden">
              <img src={activity.image} alt={activity.name} className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-xl font-semibold">{activity.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Clubs and Societies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SocietyData.map(club => (
            <div key={club.name} className="relative rounded-lg shadow-lg overflow-hidden">
              <img src={club.image} alt={club.name} className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-xl font-semibold">{club.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Students;
