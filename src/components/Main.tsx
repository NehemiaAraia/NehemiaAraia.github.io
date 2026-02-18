import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://portfolio-profile-picture.s3.us-east-1.amazonaws.com/IMG_8243+2.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/NehemiaAraia" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/nehemia-araia/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Nehemia Araia</h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
  <p style={{ margin: 0 }}>Aspiring Security Professional</p>

</div>

          <div className="mobile_social_icons">
            <a href="https://github.com/NehemiaAraia" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/nehemia-araia/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;