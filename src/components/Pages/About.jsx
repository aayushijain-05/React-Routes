import { Footer } from "../Footer";
import { Header } from "../Header";

export const About = () => {
  const teamMembers = [
    { name: 'Alice Johnson', role: 'CEO', bio: 'Leading the team with vision and passion.' },
    { name: 'Bob Smith', role: 'CTO', bio: 'Innovating technology solutions for our clients.' },
    { name: 'Charlie Brown', role: 'Designer', bio: 'Creating beautiful and user-friendly designs.' },
  ];

  return (
    <div>
      <Header />
  
    <div className="flex flex-col items-center ">
      
      <h2 className="text-3xl font-bold mb-6 mt-5 text-center text-blue-600">About Us</h2>
      <table className="mt-5 mb-40 border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Role</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Bio</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((member, index) => (
            <tr key={index} className={`${index === 1 ? "bg-gray-100" : ""} hover:bg-blue-50`}>
              <td className="border border-gray-300 px-4 py-2">{member.name}</td>
              <td className="border border-gray-300 px-4 py-2">{member.role}</td>
              <td className="border border-gray-300 px-4 py-2">{member.bio}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <Footer />
    </div>

  );
};
