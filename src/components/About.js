// About.js
function About({ logo, aboutText }) {
    const defaultLogo = "https://via.placeholder.com/215";
    const logoAltText = "blog logo";
  
    return (
      <aside>
        <img src={logo || defaultLogo} alt={logoAltText} />
        <p>{aboutText}</p>
      </aside>
    );
  }
export default About;  