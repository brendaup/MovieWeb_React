import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul class="social-icons">
        <li>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png"
            alt="instagram"
          />
        </li>
        <li>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png"
            alt="facebook"
          />
        </li>
        <li>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1280px-Logo_of_Twitter.svg.png"
            alt="twitter"
          />
        </li>
      </ul>
      <div>
        <p>&copy; 2023 Cineverse. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
export default Footer; 
