import { Container, Row, Col, Tab, Nav, TabPane } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { fg1, f1, fg2, fg3, fg5, fg6, fg7, fg8, fg9 } from "../assets/img";
import { t1, t2, t3, t5, t6 } from "../assets/img";
import { m1, m2, m3, m4, maze1, maze2, smartPark } from "../assets/img";
import farmVideo from '../assets/videos/farm.mp4';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from "react";

export const Projects = () => {

  const projectSmart = [
    {
      title: "Smart Park",
      description: "",
      imgUrl: smartPark,

    }
  ]

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
      title: "Teen Athlete",
      description: "Website using Opendata API",
      imgUrl: t3,
    },
    {
      title: "Teen Athlete",
      description: "Website using Opendata API",
      imgUrl: t5,
    },
    {
      title: "Teen Athlete",
      description: "Event filter and category",
      imgUrl: t6,
    },
    {
      title: "Teen Athlete",
      description: "Map direction",
      imgUrl: t1,
    },
    {
      title: "Teen Athlete",
      description: "Website using Opendata API",
      imgUrl: t2,
    },

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
                        <Nav.Link eventKey="smart">Smart Park</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="first">Fitness Go</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Teen Athletics</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">MenuScanOrder</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="forth">Farm Game</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fifth">Maze</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="smart">
                        <p>A smart park, simply put, is a modern, high-tech area that uses advanced technology to make things run more smoothly.

                          Picture walking into a park where everything—like lighting, security, and energy use—runs automatically. For example, the energy system adapts to how much electricity is being used to save power and reduce costs. The security cameras can watch over the area and even spot suspicious activity to trigger an alarm if needed.

                          A smart park can also manage services like parking, booking meeting rooms, and even landscaping irrigation through apps and smart devices. In short, by integrating technology, a smart park makes operations more efficient and eco-friendly, improving the overall quality of life and work within the park
                        </p>
                        <Row>
                          {
                            projectSmart.map((project, index) => {
                              return (
                                <ProjectCard className="smart"
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="first">
                        <p>Fitness Go is an IOS game that encourages healthy living through gacha mechanism. By integrating with Apple HealthKit, this game converts physical activities, such as walking or running tracked via smartphones or smartwatches, into in-game currency. The currency is then used to draw equipment from gacha wheel to enhance game performance. It also has an auto-battler system and competition system where users can compare their progress with their friends, which fosters a sense of community and motivates users to exercise more."
                          <br /><strong className="tech">SwiftUI + Swift</strong>
                        </p>
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
                        <p>The main goal of the website is to help teenagers quickly find sports activities that interest them, leveraging Open Data API from the Brisbane City Council. We aim to promote the healthy and happy growth of teenagers through increased participation in activities.
                          <br /><strong className="tech">Javascript, API </strong>
                          <li> Integration with API for up-to-date event</li>
                          <li>Event category filter</li>
                          <li>Event keywords search</li>
                          <li>Navigation routes and different transportation modes supported</li>
                          <li>Event reviews section</li>
                          <li>Event Bookings</li>
                          <a className="link" href="https://deco1800teams-t35-7up.uqcloud.net/home.html">View</a></p>
                        <Row>
                          {
                            projects2.map((project, index) => {
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
                      <Tab.Pane eventKey="third">
                        <p>MenuScanOrder is a SaaS solution designed to make ordering at a restaurant or cafe more
                          efficient, considering both the perspectives of business owners and customers.<br />
                          <strong className="tech"> Bootstrap, PHP RESTful APIs</strong>
                          <li>Digital Menu Creation</li>
                          <li>Powered by Claudie AI, auto-generated dish description</li>
                          <li>Menu Editing and Management</li>
                          <li>QR Generation for Each Table</li>
                          <li>Scan and Ordering</li>
                          <li>Live view of the Orders and Change Order Status</li>
                          <li>Admin management of subscriptions</li></p>
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
                        <p><strong className="tech">Python</strong></p>
                        <video width="100%" height="400px" controls>

                          <source src={farmVideo} type="video/mp4" />
                          Your browser does not support the video tag. Please download the video
                          <a href={farmVideo}>here</a>.
                        </video>
                      </Tab.Pane>

                      <Tab.Pane eventKey="fifth">
                        <p><strong className="tech">JAVA</strong></p>
                        <Row>

                          {
                            projects4.map((project, index) => {
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
