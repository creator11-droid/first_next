import GateGo from "../../../assets/icons/Brand-Book.svg";
import TruckRamp from "../../../assets/icons/truck-ramp.svg";
import Location from "../../../assets/icons/location-dot.svg";
import Down from "../../../assets/icons/caret-down.svg";
import Image from "next/image";
import "./index.css";
export default function Header () {
  return (
    <div className="top">
     
        <figure className="logo">
          <Image src={GateGo} alt="made"/>
        </figure>
      <div className="end">
      
        <div className="drop">
          <Image src={TruckRamp} alt="made" className="first"/>
          <p>All Carriers</p>
          <Image src={Down} alt="made" className="last"/>
        </div>
       
        <div className="drop">
        <Image src={Location} alt="made" className="first"/>
          <p>All Locations</p>
          <Image src={Down} alt="made" className="last"/>
        </div>
      </div>
    </div>
  )
}