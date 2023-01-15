
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from '@mui/icons-material/Mail';

import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  console.log(year)
  return (
    <footer id="footer">
      <div className="name">
        <h2>I am Mohd Sharif</h2>
        <h6 style={{textAlign:"center"}}>Developer of This WebApp</h6>
      </div>
      <div className="profile_wrapper">
        <div className="about_me">
          <h3>About Me</h3>
          <p>
          My name is Mohammed Sharif and I am a Full Stack Software Developer. I specialize in building applications using the MERN stack, and have a great interest in frontend designing and development. My skills in problem solving and data structures & algorithms make me a valuable asset to any team. I am highly proficient in technologies such as Java, JavaScript, ExpressJs, ReactJs, Redux, HTML/CSS, Bootstrap, MaterialUI, and MongoDb. I am passionate about creating high-quality software and am always looking for new challenges to tackle. If you're looking for a skilled software developer, look no further than me. I would be happy to work on your next project and help bring your ideas to life.
          </p>
        </div>
        <div className="my_pic">
        </div>
        <div className="connect_me">
          <h3>Connect With Me</h3>
          <ul>
            <li >
              <a href="https://in.linkedin.com/in/shaarifg?trk=people-guest_people_search-card" 
              target="_blank" rel="noreferrer" className="list_item">
                <LinkedInIcon /> LinkedIn
              </a>
            </li>
            <li >
              <a href="https://github.com/shaarifg" 
              target="_blank" rel="noreferrer" className="list_item">
                <GitHubIcon /> Github
              </a>
            </li>
            <li >
              <a href="mailto:ermohdsharif@gmail.com" 
              target="_blank" rel="noreferrer" className="list_item">
              <MailIcon/> ermohdsharif@gmail.com
              </a>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="copyright">&copy; {year}, All rights are reserved | Mohd Sharif</div>
    </footer>
  );
};

export default Footer;
