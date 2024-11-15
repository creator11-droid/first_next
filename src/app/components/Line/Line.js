import Image from "next/image"
import "./index.css"
export default function Line({ title, icon, amount }) {

  return (
    <div className="line">
      <div className="melt">
          <figure>
          <Image src={ icon} alt="sle" className="photo"/>
          </figure>
        <p>{ title}</p>
      </div>
      <p className="para">{amount }</p>
    </div>
  )
}