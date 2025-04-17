import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js"
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const htmlProjects = [
    {
      title: "Red Store",
      description: "this is fully responsive site",
      imgUrl: projImg1,
      siteUrl: "https://redstorev1.netlify.app/"
    },
    {
      title: "Attendence System",
      description: "This project is built using HTML, CSS, and JavaScript. It includes a Firebase database where we can maintain records.",
      imgUrl: projImg2,
      siteUrl: "https://attendencev1.netlify.app/"
    },
    {
      title: "Online Code",
      description: "This project is a real-time code editor in which you can use HTML, CSS, and JS in real time.",
      imgUrl: projImg3,
      siteUrl: "https://online-code-editor-v1.netlify.app/"
    },

  ];

  const reactProjects = [
    {
      title: "Health X Pakistan",
      description: "This project was made using React, and it also includes a model. It is a 4-page site that was created by our team.",
      imgUrl: projImg4,
      siteUrl: "https://health-x-pakistan.vercel.app/"
    },
    {
      title: "Github Sreach",
      description: "We can view anyone's details using the GitHub API, as long as they are on GitHub.",
      imgUrl: projImg5,
      siteUrl: "https://github-sreach.vercel.app/"
    },
    {
      title: "Weather App",
      description: "By using the weather API, we can search the weather of any city.",
      imgUrl: projImg6,
      siteUrl: "https://weather-app-six-nu-94.vercel.app/"
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                  <h2>Projects</h2>
                  <p>At the heart of innovation and creativity, these projects showcase my hands-on experience in web development, highlighting both front-end and back-end skills. From building responsive interfaces with React to crafting static designs with HTML, CSS and JS, each project demonstrates problem-solving, attention to detail, and a user-focused approach. Explore the collection to see real-world applications brought to life through code.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">React</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">HTML CSS</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="third">JS</Nav.Link>
                      </Nav.Item> */}
                    </Nav>

                    <Tab.Content >
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            htmlProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="first">
                      <Row>
                          {
                            reactProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>


                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="img"></img>
    </section>
  )
}