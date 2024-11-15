import Topic from "../Topic/Topic";
import truck from "../../../assets/icons/truck2.svg"
import Image from "next/image";
import circle1 from "../../../assets/icons/Rectangle.svg"
import circle2 from "../../../assets/icons/Rectangle2.svg"
import GeoLocation from "../../../assets/icons/location-dot.svg"
import "./index.css"

export default function YardCapacity() {
  return (
    <section className="Yard large_section">
      <Topic icon={truck} header="Yard Capacity" value={true} />
      <div className="yard_body">
        <div className="yard_begin">
          <h2>Usage</h2>
          <div className="yard_grid">
            <div className="yard_flex">
              <h1>40%</h1>
              <div className="yard_width">
                  <div className="forty"></div>
              </div>
            </div>
            <div className="yard_str">
              <span className="yard_span">
                <figure>
                <Image src={circle1} alt="img" />
                </figure>
                <h2>Spots Used <p className="yard_blue">154</p></h2>
              </span>
              <span className="yard_span">
                <figure>
                  <Image src={circle2 } alt="img" />
                </figure>
                <h2>Max Capacity <p className="yard_white">800</p></h2>
              </span>
            </div>

        </div>
        </div>
        <div className="yard_end">
          <h2>Yards</h2>
          <div className="m">
            <div className="mines">
            <div className="mines_head">
              <div className="mines_first">
                <figure>
                  <Image src={GeoLocation} alt="img" className="img"/>
                </figure>
                <p>Mines Road</p>
              </div>
              <div className="mines_last">
                <p>154/400</p>
              </div>

            </div>
            <div className="mines_width">
                <div className="travelled"></div>
            </div>
          </div>
          <div className="mines">
            <div className="mines_head">
              <div className="mines_first">
                <figure>
                  <Image src={GeoLocation} alt="img" className="img"/>
                </figure>
                <p>Colombia</p>
              </div>
              <div className="mines_last">
                <p>0/400</p>
              </div>

            </div>
            <div className="mines_width">
                
            </div>
          </div>
          </div>
         
          
        </div>
        
      </div>
    </section>
  )
}