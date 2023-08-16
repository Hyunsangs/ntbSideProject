import "./Home.scss";

import Card from '../../UI/Card';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/quiz');
  }
  return (
    <div>

      <Card>
      <div className='home-main-wrapper-header'>
        <p className='title'>디지털 격차 OX 퀴즈!!</p>
        </div>
        <div className='home-main-wrapper-body'>
        <button onClick={navigateHandler} variant="outline-danger">퀴즈 시작</button>
        </div>
     
      </Card>
       
      
    </div>
  )
}

export default Home
