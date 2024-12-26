import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Matematika Kelas 10', category: '', link: '/Mtk10',image:''},
      { id: 2, name: 'Matematika Kelas 11', category: '', link: '/Mtk11',image:''},
      { id: 3, name: 'Matematika Kelas 12', category: '', link: '/Mtk12',image:''},
      { id: 4, name: 'Fisika kelas 10', category: '', link: '/Fsk10',image:''},
      { id: 5, name: 'Fisika kelas 11', category: '', link: '/Fsk11',image:''},
      { id: 6, name: 'Fisika kelas 12', category: '', link: '/Fsk12',image:''},
      { id: 7, name: 'Kimia kelas 10', category: '', link: '/Kma10',image:''},
      { id: 8, name: 'Kimia kelas 11', category: '', link: '/Kma11',image:''},
      { id: 9, name: 'Kimia kelas 12', category: '', link: '/kma12',image:''},
      { id: 10, name: 'Biologi kelas 10', category: '', link: '/Bgl10',image:''},
      { id: 11, name: 'Biologi kelas 11', category: '', link: '/Bgl11',image:''},
      { id: 12, name: 'Biologi kelas 12', category: '', link: '/Bgl12',image:''},
      { id: 13, name: 'Bahasa Inggris kelas 10', category: '', link: '/Bing10',image:''},
      { id: 14, name: 'Bahasa Inggris kelas 11', category: '', link: '/Bing11',image:''},
      { id: 15, name: 'Bahasa Inggris kelas 12', category: '', link: '/Bing12',image:''},
      { id: 16, name: 'Ekonomi kelas 10', category: '', link: '/Eko10',image:''},
      { id: 17, name: 'Ekonomi kelas 11', category: '', link: '/Eko11',image:''},
    ];

    setBiologies(mockBiologies);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.biologi-biology-card');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="biologi-biology-section">
        <div className="container">
          <div className="section-header">
            <h2>Developer</h2>
          </div>
          <div className="biology-grid">
            {biologies.map((biology) => (
              <div key={biology.id} className="biologi-biology-card">
                <div className="card-image">
                  <img src={biology.image} alt={biology.name} />
                  <div className="card-category">{biology.category}</div>
                </div>
                <div className="card-content">
                  <h3>{biology.name}</h3>
                  <p>{biology.description}</p>
                  <button
                    className="detail-btn"
                    onClick={() => navigate(biology.link)}
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materi;