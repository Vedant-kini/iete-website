import React from 'react';
import './Inspirations.css';
import professor1 from '../../Assets/professor.jpeg'; // Replace with actual image path
import professor2 from '../../Assets/professor.jpeg'; // Replace with actual image path

const Inspirations = () => {
  return (
    <section id="inspiration" className="inspirations-section">
      {/* Title */}
      <h1 className="inspirations-title">OUR INSPIRATION</h1>

      {/* Inspirations Container */}
      <div className="inspirations-container">
        {/* First Inspiration Box */}
        <div className="inspiration-box">
          <div className="profile-circle">
            <img src={professor1} alt="Professor 1" className="profile-img" />
          </div>
          <h2 className="inspiration-name">Dr. Sanjay D. Deshmukh</h2>
          <p className="inspiration-post">HOD, EXTC Department</p>
        </div>

        {/* Second Inspiration Box */}
        <div className="inspiration-box">
          <div className="profile-circle">
            <img src={professor2} alt="Professor 2" className="profile-img" />
          </div>
          <h2 className="inspiration-name">Prof. Surendra T. Sutar</h2>
          <p className="inspiration-post">Committee Convener</p>
        </div>
      </div>
    </section>
  );
};

export default Inspirations;





// import React from 'react';
// import './Inspirations.css';

// // Replace these with actual image paths
// import professor1 from '../../Assets/professor.jpeg'; 
// import professor2 from '../../Assets/professor.jpeg';

// const Inspirations = () => {
//   return (
//     <section className="inspirations">
//       <h2 className="inspirations-title">Our Inspirations</h2>
//       <div className="cards-container">
//         <div className="card">
//           <img src={professor1} alt="Professor 1" className="card-img" />
//           <div className="card-info">
//             <h3 className="card-name">Dr. Sanjay D. Deshmukh</h3>
//             <p className="card-post">HOD, EXTC Department</p>
//           </div>
//         </div>
//         <div className="card">
//           <img src={professor2} alt="Professor 2" className="card-img" />
//           <div className="card-info">
//             <h3 className="card-name">Prof. Surendra T. Sutar</h3>
//             <p className="card-post">IETE Committee</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Inspirations;
