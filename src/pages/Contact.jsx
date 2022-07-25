import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import map from '../assets/images/map.png'
const Contact = () => {

  return (
    <Helmet title="Contact">
    <CommonSection title="Contact" />
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center">
          <h4>Ми знаходимось біля тебе</h4>
          <p>Київ</p>
          <p>Вул Богдана Хмельницького 40</p>
          <p>3404 787 77 77</p>
          </Col>
          <Col lg="12" className="text-center">
            <img className="w-50 mt-3" src={map} alt="map"/>
          </Col>
        </Row>
      </Container>
    </section>
    </Helmet>
  )
}

export default Contact