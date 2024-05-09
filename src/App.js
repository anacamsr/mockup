
import "./App.css";
import Home from "./pages/Home";
import { Button, Col, Container, Input, InputGroup, Nav, NavItem, NavLink, Navbar, NavbarBrand, Row } from "reactstrap";
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import logo from '../src/assets/logo.png';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar color="light" light expand="md">
          <Container className="d-flex align-items-center justify-content-between"> {/* Usando d-flex para tornar o Container um flex container */}
            <NavbarBrand href="/">
              <img src={logo} alt="Logo" className="logo-img" width={100}/>
            </NavbarBrand>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#">Servicos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Como Funciona</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contato</NavLink>
              </NavItem>
            </Nav>
            <InputGroup style={{ width: '250px' }} className="align-items-center"> {/* Adicionando d-flex para fazer o InputGroup um flex container */}
              <Input placeholder="Pesquisar..." />
              <Button color="secondary"><FaSearch /></Button>
            </InputGroup>
            <div className="user-profile">
              <Button color="link"><FaUser /></Button>

            </div>
            <div className="shopping-cart">
              <Button color="link"><FaShoppingCart /></Button>
            </div>
          </Container>
        </Navbar>
      </header>
      <Home />
      <footer className="App-footer">
        <Container>
          <Row>
            <Col xs="12" sm="2">
              <div style={{ textAlign: 'left' }}>
                <b style={{ marginBottom: 'ß15px' }}><u><h5>SUDESTE</h5></u></b>
                <p><b>Rio de Janeiro</b></p>
                <p style={{ marginTop: '-15px' }}>(21)2223-0397</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p><b>São Paulo</b></p>
                <p style={{ marginTop: '-15px' }}>(11) 3138-6120</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p><b>Campinas</b></p>
                <p style={{ marginTop: '-15px' }}>(19) 3239-3162</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p><b>Santos</b></p>
                <p style={{ marginTop: '-15px' }}>Embreve</p>
              </div>
            </Col>
            <Col xs="1" sm="2">
              <div style={{ textAlign: 'left' }}>
                <b style={{ marginBottom: 'ß15px' }}><u><h5>NORDETE</h5></u></b>
                <p><b>Bahia</b></p>
                <p style={{ marginTop: '-15px' }}>(71) 3043-6152</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p><b>Ceará</b></p>
                <p style={{ marginTop: '-15px' }}>(85) 3034-6020</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p><b>Pernambuco</b></p>
                <p style={{ marginTop: '-15px' }}>(81) 3314-6520</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p><b>Sergipe</b></p>
                <p style={{ marginTop: '-15px' }}>(79) 99960-9868</p>
              </div>
            </Col>
            <Col xs="1" sm="2">
              <div style={{ textAlign: 'left' }}>
                <b style={{ marginBottom: 'ß15px' }}><u><h5>SUL</h5></u></b>
                <p><b>Paraná</b></p>
                <p style={{ marginTop: '-15px' }}>(41) 3014-7367</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p><b>Rio Grande do Sul</b></p>
                <p style={{ marginTop: '-15px' }}>(51) 3360-4799</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p><b>Santa Catarina</b></p>
                <p style={{ marginTop: '-15px' }}>(48) 3304-0491</p>
              </div>
            </Col>
            <Col xs="1" sm="2">
              <div style={{ textAlign: 'left' }}>
                <b style={{ marginBottom: 'ß15px' }}><u><h5>SUDESTE</h5></u></b>
                <p><b>Rio de Janeiro</b></p>
                <p style={{ marginTop: '-15px' }}>(21)2223-0397</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p><b>São Paulo</b></p>
                <p style={{ marginTop: '-15px' }}>(11) 3138-620</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p><b>Campinas</b></p>
                <p style={{ marginTop: '-15px' }}>(19) 3239-3162</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p><b>Santos</b></p>
                <p style={{ marginTop: '-15px' }}>Embreve</p>
              </div>
            </Col>
            <Col xs="1" sm="2">
              <div style={{ textAlign: 'left' }}>
                <b style={{ marginBottom: 'ß15px' }}><u><h5>SUDESTE</h5></u></b>
                <p><b>Rio de Janeiro</b></p>
                <p style={{ marginTop: '-15px' }}>(21)2223-0397</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p><b>São Paulo</b></p>
                <p style={{ marginTop: '-15px' }}>(11) 3138-620</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p><b>Campinas</b></p>
                <p style={{ marginTop: '-15px' }}>(19) 3239-3162</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p><b>Santos</b></p>
                <p style={{ marginTop: '-15px' }}>Embreve</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
