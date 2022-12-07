import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header className="App-header">
          <Navbar style={{ backgroundImage: 'url("https://www.hunterlab.com/media/images/chandler-walters-qFuKzUleXsw-unspl.2e16d0ba.fill-692x346.jpg")' }} variant="dark" fixed="top">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>AAKABARU</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
      </div>
      <footer className="text-center">
          <div>All rigths reserved</div>
        </footer>
      
    </BrowserRouter>
  );
}

export default App;
