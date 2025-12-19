import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://portfolio-profile-picture.s3.us-east-1.amazonaws.com/1739429651966.jpeg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/NehemiaAraia" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/nehemia-araia/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Nehemia Araia</h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
  <p style={{ margin: 0 }}>Aspiring Cloud Professional</p>

 <a
  href={`${process.env.PUBLIC_URL}/Resume.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="resume-button"
>
  View Resume
</a>

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