import React from 'react'

const About = () => {
  const facilities = [
    {
      title: 'State-of-the-art Science and Computer Labs',
      description: 'Our labs are equipped with the latest technology to enhance the learning experience.',
      image: 'https://via.placeholder.com/400x300?text=Science+Lab'
    },
    {
      title: 'Spacious and Well-Equipped Classrooms',
      description: 'Our classrooms are designed to be comfortable and conducive to effective learning.',
      image: 'https://via.placeholder.com/400x300?text=Classroom'
    },
    {
      title: 'Library with a Vast Collection',
      description: 'Our library offers a wide range of books and digital resources to support academic growth.',
      image: 'https://via.placeholder.com/400x300?text=Library'
    },
    {
      title: 'Sports Facilities',
      description: 'Includes a playground, gymnasium, and swimming pool to encourage physical activities.',
      image: 'https://via.placeholder.com/400x300?text=Sports+Facilities'
    },
  ];
  return (
    <div className="w-[100vw] overflow-x-hidden bg-gray-50">
      <section className="py-[8vmin]">
        <h1 className="text-[4vmin] md:text-[5vmin] font-semibold text-center text-gray-900 mb-[4vmin]">About Us</h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-[50%] p-[3vmin] border-r-[0.5vmin] border-orange-400 flex items-center">
            <p className="text-[3vmin] md:text-[4vmin] font-semibold text-gray-800">
              Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
            </p>
          </div>
          <div className="md:w-[50%] p-[3vmin] flex justify-center items-center">
            <img
              src="https://t4.ftcdn.net/jpg/01/05/50/57/360_F_105505758_wDjSEmyWMc2cCJ3xU0az1LfTWzxSSOyE.jpg"
              alt="About Us"
              className="rounded-xl shadow-lg object-cover w-full h-full max-w-[60vmin]"
            />
          </div>
        </div>
      </section>

      <section className="py-[8vmin] bg-white">
        <h1 className="text-[4vmin] md:text-[5vmin] font-semibold text-center text-gray-900 mb-[4vmin]">Our Vision</h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-[50%] p-[3vmin] flex justify-center items-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/583ed05c59cc68a8c3e45c0f/1482074282081-KQBCRLEWPLWTJKWBCR4X/vision.png?format=750w"
              alt="Our Vision"
              className="rounded-xl shadow-lg object-cover w-full h-full max-w-[60vmin]"
            />
          </div>
          <div className="md:w-[50%] p-[3vmin] border-l-[0.5vmin] border-orange-400 flex items-center">
            <p className="text-[3vmin] md:text-[4vmin] font-semibold text-gray-800">
              To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[8vmin]">
        <h1 className="text-[4vmin] md:text-[5vmin] font-semibold text-center text-gray-900 mb-[4vmin]">Our Mission</h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-[50%] p-[3vmin] border-r-[0.5vmin] border-orange-400 flex items-center">
            <p className="text-[3vmin] md:text-[4vmin] font-semibold text-gray-800">
              To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
            </p>
          </div>
          <div className="md:w-[50%] p-[3vmin] flex justify-center items-center">
            <img
              src="https://cdn1.careeraddict.com/uploads/article/60614/how-to-set-goals-at-work.jpg"
              alt="Our Mission"
              className="rounded-xl shadow-lg object-cover w-full h-full max-w-[60vmin]"
            />
          </div>
        </div>
      </section>

      <section className="px-[1vmin] py-[5vmin] md:px-0">
        <h1 className="text-[4vmin] md:text-[5vmin] font-semibold text-center text-gray-900 mb-[4vmin]">Our Principal Says</h1>
        <div className="mx-auto max-w-[80vmin]">
          <div className="md:flex md:items-center md:justify-center md:space-x-[7vmin]">
            <div className="relative h-[24vmin] w-[24vmin] flex-shrink-0">
              <img
                className="relative h-[24vmin] w-[24vmin] rounded-full object-cover"
                src="https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M="
                alt="Principal"
              />
            </div>
            <div className="mt-[5vmin] md:mt-0">
              <blockquote>
                <p className="text-[3vmin] text-black">
                  “At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.”
                </p>
              </blockquote>
              <p className="mt-[3.5vmin] text-[2.5vmin] font-semibold text-black">John Doe</p>
              <p className="mt-[1vmin] text-[2vmin] text-gray-600">Principal at Springdale Public School</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 py-[6vmin]">
        <div className="mx-auto max-w-[140vmin] px-[2vmin] sm:px-[3vmin] lg:px-[4vmin]">
          <h2 className="text-[4vmin] font-bold text-center text-gray-900 mb-[4vmin]">Infrastructure and Facilities</h2>
          <div className="grid grid-cols-1 gap-[4vmin] md:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility) => (
              <div key={facility.title} className="relative overflow-hidden rounded-lg bg-white shadow-lg">
                <img src={facility.image} alt={facility.title} className="h-[24vmin] w-full object-cover" />
                <div className="p-[3vmin]">
                  <h3 className="text-[3vmin] font-semibold text-gray-900">{facility.title}</h3>
                  <p className="mt-[2vmin] text-[2.5vmin] text-gray-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
