import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import me from "../assets/img/me.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  const sendEmail = () => {
    const email = "sharon.yufei.yao@gmail.com";
    window.location.href = `mailto:${email}?subject=Hello&body=Hi.`;

  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Sharon.`} <br></br><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "software developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I'm a passionate and driven recent graduate in IT. My goal is to create apps and websites that not only meet technical requirements but are also aesthetically appealing.

                    When I'm not coding or solving technical challenges, you can find me exploring new hobbies, enjoying outdoor adventures, playing with LEGO, or diving into creative projects. I believe in continuous learning and love connecting with like-minded individuals to share ideas and collaborate on exciting opportunities.</p>
                  <button onClick={sendEmail}>Let’s Chat <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={me} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
