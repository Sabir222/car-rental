const team = [
  {
    id: 1,
    name: "John Doe",
    picture: "/team1.png",
    role: "Manager",
  },
  {
    id: 2,
    name: "Jane Smith",
    picture: "/team2.png",
    role: "Sales Representative",
  },
  {
    id: 3,
    name: "Mike Johnson",
    picture: "/team3.png",
    role: "Customer Support",
  },
  {
    id: 4,
    name: "Sarah Lee",
    picture: "/team4.png",
    role: "Web Developer",
  },
  {
    id: 5,
    name: "Alex Brown",
    picture: "/team5.png",
    role: "Marketing Specialist",
  },
  {
    id: 6,
    name: "Emily Taylor",
    picture: "/team6.png",
    role: "The Owner",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-[100vh]">
      <div className="mx-auto max-w-[1400px]  p-6 flex items-center justify-center">
        <div className="p-6 ">
          <div className="flex absolute md:static top-[150px] left-3 right-3 rounded-2xl mb-11 p-6 bg-white flex-col shadow-xl justify-center items-center w-[300px] sm:w-[500px] md:w-[700px] lg:w-[900px] mx-auto ">
            <p className="pb-3 text-5xl text-center text-blue-700">About us</p>
            <p className="text-center max-w-[1200px] text-gray-700 mx-auto text-lg pb-11">
              About Our Team At [Your Car Rental Company], we take great pride
              in the dedicated and passionate team that makes our car rental
              service possible. Each member of our team brings a unique set of
              skills and expertise, working together seamlessly to ensure that
              every customer's experience is exceptional.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10 mt-[300px] md:mt-[10px]">
            {team.map((member, index) => {
              return (
                <div
                  className="bg-white w-[300px] h-[400px] shadow-2xl flex flex-col"
                  key={index}
                >
                  <div>
                    <img
                      src={member.picture}
                      alt="team member picture"
                      className="object-cover h-[300px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center bg-[#F6F7F9] h-full ">
                    <p className="text-2xl font-bold">{member.name}</p>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
