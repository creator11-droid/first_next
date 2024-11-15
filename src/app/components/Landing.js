import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import OverView from "./OverView/OverView";
import './index.css'
import Card from "./Card/Card";
import { movements, Yard, TrailerStatus, issues, TyreInspections } from "../data/data";
import LargeCard from "./LargeCard/LargeCard";
import YardCapacity from "./YardCapacity/YardCapacity";


export default function Landing() {
  return (
    <main>
      <div className="side">
        <Nav/>
      </div>
      <div className="content">
        <Header />
        <OverView />
        <div className="grids">
          <div className="single">
            <Card props={movements} />
            <YardCapacity/>
            
          </div>
          <div className="single">
            <Card props={Yard} />
            <LargeCard props={ issues} />
          </div>
          <div className="single">
            <Card props={TrailerStatus} />
            <LargeCard props={ TyreInspections} />
          </div>
        </div>
      </div>
    </main>
  )
}