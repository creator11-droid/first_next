import Image from "next/image";
import Line from "../Line/Line";
import "./index.css"
import Topic from "../Topic/Topic";

export default function Card(props) {
  console.log(props.props);
  
  const {header, icon, inner, value} = props.props
  return (
    <section className="small_section" >
   <Topic icon={icon} header={header} value={value}/>
      <div className="spread">
        {
          inner?.map(element => {
            return (
              <Line title={element.title} icon={element.icon} amount={element.amount}/>
            )
          })
        }
        
        
      </div>
    </section>
  )
}