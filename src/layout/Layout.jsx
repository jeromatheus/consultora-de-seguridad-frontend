import Container from 'react-bootstrap/Container';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Container fluid>
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;