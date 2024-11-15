import  Vector  from "../../../assets/icons/Vector.svg"
import  Home  from "../../../assets/icons/Frame.svg"
import  Swap  from "../../../assets/icons/Frame2.svg"
import GeoLocator from "../../../assets/icons/GeoLocator.svg"
import  Settings  from "../../../assets/icons/Settings.svg"
import  FD  from "../../../assets/icons/FD.svg"
import Image from "next/image"
import "./index.css"

export default function Nav(){
  return (
    <nav >
      <div className="first section">
        <figure className="holder special">
          <Image src={Vector} alt="stand"className="pic"/>
        </figure>
        <figure className="holder blue">
          <Image src={Home } alt="stand"className="pic"/>
        </figure>
        <figure className="holder">
          <Image src={Swap} alt="stand" className="pic"/>
        </figure>
        <figure className="holder">
          <Image src={ GeoLocator} alt="stand" className="pic"/>
        </figure>

      </div>
      <div className="second section">
      <figure className="holder">
          <Image src={Settings } alt="stand" className="pic"/>
        </figure>
        <figure className="holder round">
          <Image src={FD } alt="stand" className="pic"/>
          </figure>
      </div>
    </nav>
  )
}