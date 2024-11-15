import Image from "next/image"
import "./index.css"

export default function Complaints(props) {
  const { id, detail, icon, warning, tyre,image } = props.props
  return (
    <div className="complaints_body">
      <div className="complaints_begin">
        <figure className="complaints_photo">
          <Image src={ image} className="img" alt="img"/>
        </figure>
        <div>
          <p> {id}</p>
          <div className="complaints_detail">
            {tyre && <figure className="complaints_tyre">
              <Image src={tyre } className="img" alt="img"/>
            </figure>}
            <p>{ detail}</p>
          </div>
        </div>
      </div>
      <div className="complaints_end">
        <figure className="complaints_warning">
          <Image src={ warning} className="img" alt="img"/>
        </figure>
        <figure className="complaints_icon"> 
          <Image src={ icon}  className="img" alt="img" />
          </figure>
      </div>
    </div>
  )
}