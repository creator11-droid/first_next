import Image from "next/image";
import rotate from "../../../assets/icons/rotate.svg"
import "./index.css"

export default function OverView() {
  return (
    <div className="overview">
      <h2>
    Overview
      </h2>
      <figure>
        <Image src={rotate} alt="Manners"/>
      </figure>
    </div>
  )
}