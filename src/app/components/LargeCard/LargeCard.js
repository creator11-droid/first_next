import Complaints from "../Complaints/Complaints"
import Issues from "../Issues/Issue"
import Topic from "../Topic/Topic"
import "./index.css"

export default function LargeCard(props) {
  const {header, icon, value,text,info, recent} =props.props
  return (
    <section className="large_section">
      <Topic header={header} icon={icon} value={value}/>
      <div className="large_body">
        <Issues props = {info}/>
        <h2>{text}</h2>
        <div>
          {
            recent.map((e) => {
              return <Complaints props={e} />
            })
          }
        </div>
      </div>
  </section>
)
}