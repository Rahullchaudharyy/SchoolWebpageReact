import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Principal',
    qualification: 'M.Ed',
    experience: '20 years of experience in educational administration',
    imgUrl: 'https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=',
  },
  {
    name: 'Jane Smith',
    role: 'Vice Principal',
    qualification: 'M.Sc. in Physics',
    experience: '15 years of teaching experience',
    imgUrl: 'https://media.istockphoto.com/id/1138562953/photo/portrait-of-casual-smiling-man.jpg?s=612x612&w=0&k=20&c=xKkJLi2SO4el4RhGmBaxI5hhRkROvVrDAkRHnTm0BB4=',
  },
  {
    name: 'Emily Johnson',
    role: 'English Teacher',
    qualification: 'M.A. in English',
    experience: '10 years of teaching experience',
    imgUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Michael Brown',
    role: 'Mathematics Teacher',
    qualification: 'M.Sc. in Mathematics',
    experience: '8 years of teaching experience',
    imgUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/230317092113-04-black-male-teachers-in-us.jpg?c=original',
  },
  {
    name: 'Sophia Davis',
    role: 'Science Teacher',
    qualification: 'M.Sc. in Chemistry',
    experience: '12 years of teaching experience',
    imgUrl: 'https://us.images.westend61.de/0001355227pw/portrait-of-smiling-female-teacher-standing-in-classroom-MASF17406.jpg',
  },
  {
    name: 'David Wilson',
    role: 'Computer Science Teacher',
    qualification: 'B.Tech in Computer Science',
    experience: '5 years of teaching experience',
    imgUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=MnwxMjA3fDB8MHxwaG90by1wcm9mZXNzaW9uYWxfMHx8fGVufHx8fDE2NzA0MzEzNDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  }
];

const Faculty = () => {
  return (
    <div className="mx-auto max-w-7xl px-2 md:px-0 ">
      <div className="my-4">
        <h1 className="text-3xl font-bold">Our Faculty Member's </h1>
        <p className="mt-2 text-gray-500">
          Meet our dedicated team of professionals who are committed to providing the best educational experience.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-start">
            <div
              className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-gray-200"
              style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <img
                src={member.imgUrl}
                alt={member.name}
                className="z-0 h-full w-full rounded-[10px] object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-gray-800 bg-opacity-50 p-3 rounded">
                <h1 className="text-xl font-semibold text-white">{member.name}</h1>
                <h6 className="text-base text-white">{member.role}</h6>
                <p className="text-sm text-gray-200 mt-1">{member.qualification}</p>
                <p className="text-sm text-gray-200">{member.experience}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
