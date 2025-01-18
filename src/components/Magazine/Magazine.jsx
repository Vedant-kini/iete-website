import React from 'react';
import './Magazine.css';

import book from '../../Assets/Magazine.jpeg';

const magazines = [
  { year: 2024, image: book, pdf: 'https://drive.google.com/file/d/1aDy99-iSOcJwSC7VRyaDhyKhOzeFAe5L/view?usp=sharing' },
  { year: 2023, image: book, pdf: 'path-to-2023-pdf' },
  { year: 2022, image: book, pdf: 'path-to-2022-pdf' },
  { year: 2021, image: book, pdf: 'path-to-2021-pdf' },
  { year: 2020, image: book, pdf: 'path-to-2020-pdf' },
  { year: 2019, image: book, pdf: 'path-to-2019-pdf' },
];

function Magazine() {
  return (
    <section id="magazine" className="magazinesection">
      {/* Title and Description */}
      <h1 className="magazine-title">IETE MAGAZINE</h1>
      <p className="magazine-description">
        Explore the latest articles and updates in technology and innovation with ILUMINAR
      </p>

      {/* Magazine Grid */}
      <div className="magazine-grid">
        {magazines.map((magazine, index) => (
          <div
            key={index}
            className="magazine-box"
            onClick={() => window.open(magazine.pdf, '_blank')}
          >
            <img
              src={magazine.image}
              alt={`Magazine ${magazine.year}`}
              className="magazine-image"
            />
            <div className="hover-year">{magazine.year}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Magazine;
