import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Container, Row} from 'react-bootstrap'
import Weather from './components/Weather'
import MyNavbar from './components/MyNavbar';

function App() {
  return (
    <div>
        <MyNavbar />
        <Container className="my-4">
          <Row className="justify-content-center align-content-center">
            <Weather />
            </Row>
        </Container>
    </div>
  );
}

export default App;
