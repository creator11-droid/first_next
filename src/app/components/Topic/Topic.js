import "./index.css"
import Image from "next/image"
export default function Topic({ icon, header, value }) {
  return (
    <div className="stretch">
        <div className="first">
          <figure>
            <Image src={ icon}  alt="img" className="img"/>
          </figure>
          <p>{ header}</p>
        </div>
        {
         value && <p className="blue"> View all</p>
        }
        
      </div>
  )
}