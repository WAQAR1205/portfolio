import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl , siteUrl}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={siteUrl} target="_blank" rel="noopener noreferrer">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <span>To Vist Click Any Where In The Card</span>
        </div>
      </div>
        </a>
    </Col>
  )
}