export default function About() {
    return (
      <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-900 dark:bg-gray-900">
        {/* Each team member */}
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="max-w-sm mx-4 my-8 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              className="w-3/5 mx-auto mt-4"
              src={member.avatar}
              alt={`${member.name}'s Avatar`}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-800 dark:text-white">
                {member.name}
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  const teamMembers = [
    {
      name: "Ahmad Alanati",
      avatar: "https://avatars.githubusercontent.com/u/114155762?v=4",
      description: "I'm an aspiring full-stack web developer with a passion for crafting digital experiences. Eager to learn and hungry for challenges. Collaborating with experienced mentors to refine my skills is something I eagerly anticipate.",
    },
    {
        name: "Ahmad Falah",
        avatar: "https://avatars.githubusercontent.com/u/125550624?v=4",
        description: "I'm a Junior programmer and aspiring developer driven by a deep passion for coding and a strong desire for continuous learning. I'm excited to delve into novel technologies, take on challenges eagerly, and work alongside seasoned mentors in order to refine and enhance my skills.",
      },
      {
        name: "Asem Attallah",
        avatar: "https://avatars.githubusercontent.com/u/125559859?v=4",
        description: " I am an Industrial Engineering and Web Development student, a Junior programmer, and a budding developer with a passion for coding, as well as a hunger to learn. My ultimate goal is to become a professional full stack developer.",
      },
      {
        name: "Leena A.AL Zaben",
        avatar: "https://avatars.githubusercontent.com/u/125594282?v=4",
        description: "I'm a Junior programmer and budding developer, I aspire to become a Full Stack Web Developer with a passion for building scalable and user-friendly web applications. My hunger to learn drives me towards achieving this goal.",
      },
      {
        name: "Malek Abdelal",
        avatar: "https://avatars.githubusercontent.com/u/125547539?v=4",
        description: " I'm a Junior programmer and budding developer, my ambition is to evolve into a Full-stack Software Engineer with a profound passion for web security. Holding a CEH certification, I am dedicated to mastering the art of building scalable, user-friendly web applications while prioritizing security at every step.",
      },
      {
        name: "Maysa'a Albataineh",
        avatar: "https://avatars.githubusercontent.com/u/125555520?v=4",
        description: " I'm a Junior programmer and budding developer with a keen passion for building scalable and user-friendly web applications. My hunger for learning fuels my ambition to become a professional Full Stack Web Developer.",
      },
    
  ];