import { Link } from "react-router-dom";

const HeaderPreview = () => {
  return (
    <article className="header">
      <h1 className="header-font white-text h3-tag">
        Hi, I'm <br></br>
        <em className="pink-text">Shakthi</em>
        <br></br>web and Android developer
      </h1>
      <p className="gray-text p-tag">Front End Development & Android Development</p>
      <Link className="pink-text" to="/portfolio">
        Check my work
      </Link>
    </article>
  );
};

export default HeaderPreview;
