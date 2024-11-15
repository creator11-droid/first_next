import Image from "next/image";
import "./index.css"
export default function Issues(props) {
  const {icon, title, amount} = props.props
  return (
    <div className="issues_stretch">
      <div className="issues_flex">
         <figure>
        <Image src={ icon} alt="img" className="issues_img"/>
        </figure>
        <p>{title}</p>
      </div>
      <span> {amount}</span>
    </div>
  )
}