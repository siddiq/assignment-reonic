import { Link } from 'react-router-dom'
import './Home.css'

const Home: React.FC = () => {
  return (
    <div className="home container">
      <h1 className="title">Welcome to the EV Simulation</h1>

      <div className="space-y-4">
        <Link to="/task1" className="link link-blue">
          Run Simulation (Task 1)
        </Link>

        <Link to="/task2a" className="link link-green">
          Visualization & Parameters (Task 2A)
        </Link>
      </div>
    </div>
  )
}

export default Home
