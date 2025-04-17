import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have developed a strong foundation in modern web development technologies, with a particular focus on MongoDB, HTML/CSS, JavaScript, and React.js. My skills extend to version control with Git and GitHub, enabling efficient collaboration and code management. I continuously strive to enhance my technical expertise, follow best practices, and stay updated with the latest trends in the development ecosystem.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image1" />
                                <h5>Web Development(HTML, CSS , JS AND REACT.JS)</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image2" />
                                <h5>Git And GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image3" />
                                <h5>BootStrap</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image4" />
                                <h5>MongoDb</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image5" />
    </section>
  )
}