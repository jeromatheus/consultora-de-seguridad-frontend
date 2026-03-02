import Container from 'react-bootstrap/Container';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Container fluid className="p-0">
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;