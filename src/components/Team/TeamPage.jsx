import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './TeamPage.css';
import { FaArrowLeft } from 'react-icons/fa';
import memberImage from '../../Assets/professor.jpeg'; // Replace with actual image paths

const TeamPage = () => {
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);   
  const navigate = useNavigate();

  const teamMembers = Array.from({ length: 21 }, (_, index) => ({
    id: index + 1,
    name: `Member ${index + 1}`,
    post: `Role ${index + 1}`,
    image: memberImage,
  }));

  return (
    <>
      {/* Navbar */}
      <header className="teampage-header">
        <div className="navbar">
          <div className="back-button" onClick={() => navigate('/#team')}>
            <FaArrowLeft className="back-icon" />
            <span>Back</span>
          </div>
        </div>
      </header>

      {/* Core Team Section */}
      <div className="teampage-body">
        <h2 className="core-team-title">CORE TEAM</h2>
        <div className="teampage-grid">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="team-photo-circle">
                <img src={member.image} alt={member.name} className="team-img" />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-post">{member.post}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamPage;
