import Banner from "../../components/Banner/Banner";
import homeImg from '../../assets/images/home/Home.svg'
import './styles.css'
import {bannersData} from '../../constants/data'

export const Home = () => {
  return (
    <div className="container" style={{backgroundImage: `${homeImg}`}}>
      <h1>Kanban</h1>
      <div className="Kanban">
        <Banner data={bannersData}/>
      </div>
    </div>
  );

}