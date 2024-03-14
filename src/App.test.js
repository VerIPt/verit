import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App';


jest.mock('react-pacman', () => {
    return function DummyPacman(props) {
      return <div>Dummy Pacman Component</div>;
    };
  });
  
test('renders learn react link', () => {
    render(
        <Router> {}
            <App />
        </Router>
    );
   
});
