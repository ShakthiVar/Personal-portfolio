import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Github from "../../assets/images/socials/github-pink.svg";
import Codepen from "../../assets/images/socials/codepen-pink.svg";
const NavigationSocials = () => {
  return (
    <section className="social-media">
      <a
        href="https://www.linkedin.com/in/sri-shakthi-varshini-r-b-3a0477213/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="linkedin" />
      </a>
      <a
        href="https://github.com/ShakthiVar/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="github" />
      </a>
    </section>
  );
};

export default NavigationSocials;
