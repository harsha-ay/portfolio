import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Personal Portfolio",
      description: "A portfolio is a collection of projects that showcase my skills, experience. It allows clients to see my capabilities and style in action.",
      imgUrl: projImg1,
      liveDemoUrl: "https://portfolio-plum-ten-36.vercel.app/",
    },
    {
      title: "Gaming Website",
      description: "Build a visual website inspired by Zentry, and engaging video storytelling, focusing on engaging UI/UX and smooth responsiveness.",
      imgUrl: projImg2,
      liveDemoUrl: "https://gaming-fawn.vercel.app/",
    },
    {
      title: "X game",
      description: "XGame is an online gaming platform where players can access a diverse collection of games, from action-packed adventures.",
      imgUrl: projImg3,
      liveDemoUrl: "https://github.com/harsha-ay/Xgame",
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Working on projects that can be outstanding through the visuals and impact through designing.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="second">
                      <p>More projects to be added soon....</p> 
                       </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>More projects to be added soon....</p>
                       </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
