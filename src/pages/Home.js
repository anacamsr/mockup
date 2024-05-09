

import { Button, Col,  Row } from "reactstrap";
import Banner from "../components/Banner/index";
import ItemCarousel from "../components/ItemCarousel/index";

function Home() {
  return (
    <div>
      <Banner />
      <div style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Row >
          <Col>
            <Row>
              <Col md='4'>
                <span style={{ fontSize: '36px' }}>+1000</span>
              </Col>
              <Col md='4'>
                CLIENTES ATENDIDOS
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col md='3'>
                <span style={{ fontSize: '36px' }}>+20</span>
              </Col>
              <Col md='5'>
                ANOS DE MERCADO
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <ItemCarousel />
    </div>
  );
}

export default Home;
