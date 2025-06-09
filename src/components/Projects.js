import { Container, Row, Col, Tab, Nav, TabPane } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { fg1, f1, fg2, fg3, fg5, fg6, fg7, fg8, fg9 } from "../assets/img";
import { t1, t2, t3, t5, t6 } from "../assets/img";
import { m1, m2, m3, m4, maze1, maze2, smartPark } from "../assets/img";
import farmVideo from '../assets/videos/farm.mp4';
import smartVideo from '../assets/videos/smartpark.mp4';
import menuVideo from '../assets/videos/menuscan.mp4';
import fitnessVideo from '../assets/videos/fitnessgo.MP4';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from "react";

export const Projects = () => {


  const projects = [
    {
      title: "Fitness Go",
      description: "Health Data",
      imgUrl: fg1,
    },
    {
      title: "Fitness Go",
      description: "Game Entrance",
      imgUrl: fg8,
    },
    {
      title: "Fitness Go",
      description: "Gacha Wheel",
      imgUrl: fg2,
    },
    {
      title: "Fitness Go",
      description: "Rare Card",
      imgUrl: fg3,
    },
    {
      title: "Fitness Go",
      description: "Very Rare Card",
      imgUrl: fg5,
    },
    {
      title: "Fitness Go",
      description: "Game Preparation",
      imgUrl: fg6,
    },
    {
      title: "Fitness Go",
      description: "Running Game",
      imgUrl: fg7,
    },
    {
      title: "Fitness Go",
      description: "Community",
      imgUrl: fg9,
    },
  ];

  const projects2 = [
    {
      title: "SmartPark",
      description: "Website using Opendata API",
      imgUrl: t3,
    }

  ];

  const projects3 = [
    {
      title: "MenuScanOrder",
      description: "Customer Landing Page",
      imgUrl: m1,
    },
    {
      title: "MenuScanOrder",
      description: "Businessowner menu management",
      imgUrl: m2,
    },
    {
      title: "MenuScanOrder",
      description: "Admin panel",
      imgUrl: m3,
    },
    {
      title: "MenuScanOrder",
      description: "Order management",
      imgUrl: m4,
    },

  ];

  const projects4 = [
    {
      title: "Maze",
      description: "A BFS algorithm-based puzzle game",
      imgUrl: maze1,
    },
    {
      title: "Maze",
      description: "A BFS algorithm-based puzzle game",
      imgUrl: maze2,
    }
  ]


  const [activeKey, setActiveKey] = useState("first");
  const tabDescriptions = {
    first: "Fitness Go is an IOS game that encourages healthy living through gacha mechanism. By integrating with Apple HealthKit, this game converts physical activities, such as walking or running tracked via smartphones or smartwatches, into in-game currency. The currency is then used to draw equipment from gacha wheel to enhance game performance. It also has an auto-battler system and competition system where users can compare their progress with their friends, which fosters a sense of community and motivates users to exercise more.",
  };
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>

                  {/* {activeKey in tabDescriptions && (
                    <p>{tabDescriptions[activeKey]}</p>
                  )} */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first" onSelect={(k) => setActiveKey(k)}>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">

                      <Nav.Item>
                        <Nav.Link eventKey="first">SmartPark</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Fitnessgo</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">MenuScanOrder</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="forth">Farm Game</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                      <Tab.Pane eventKey="second">
                        <p>Fitness Go is an IOS game that encourages healthy living through gacha mechanism. By integrating with Apple HealthKit, this game converts physical activities, such as walking or running tracked via smartphones or smartwatches, into in-game currency. The currency is then used to draw equipment from gacha wheel to enhance game performance. It also has an auto-battler system and competition system where users can compare their progress with their friends, which fosters a sense of community and motivates users to exercise more."
                          <br />
                        </p>
                        <div className="d-flex justify-content-center mb-5">
                          <video style={{ maxHeight: "80vh", width: "auto" }} controls>
                            <source src={fitnessVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
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
                      <Tab.Pane eventKey="first">
                        <p>The internal admin system  was developed to centralize operations, enhance user management, and support data-driven decision-making. Built with React 18, TypeScript, and Ant Design, the project aimed to deliver a scalable and user-friendly platform that could grow with the company’s needs. Key features include reusable UI components, real-time dashboards, and secure role-based authentication, all designed to streamline workflows and improve overall system efficiency.</p>

                        <div className="d-flex justify-content-center mb-5">
                          <video width="100%" height="400px" controls>

                            <source src={smartVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>

                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>MenuScanOrder is a SaaS solution designed to make ordering at a restaurant or cafe more
                          efficient, considering both the perspectives of business owners and customers.<br />

                          <li>Digital Menu Creation</li>
                          <li>Powered by Claudie AI, auto-generated dish description</li>
                          <li>Menu Editing and Management</li>
                          <li>QR Generation for Each Table</li>
                          <li>Scan and Ordering</li>
                          <li>Live view of the Orders and Change Order Status</li>
                          <li>Admin management of subscriptions</li></p>

                        <div className="d-flex justify-content-center mb-5">
                          <video width="100%" height="400px" controls>

                            <source src={menuVideo} type="video/mp4" />
                            Your browser does not support the video tag. Please download the video
                            <a href={menuVideo}>here</a>.
                          </video>
                        </div>

                        <Row>
                          {
                            projects3.map((project, index) => {
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
                      <Tab.Pane eventKey="forth">

                        <video width="100%" height="400px" controls>

                          <source src={farmVideo} type="video/mp4" />
                          Your browser does not support the video tag. Please download the video
                          <a href={farmVideo}>here</a>.
                        </video>
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
