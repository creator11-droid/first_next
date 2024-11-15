import swap from "../../assets/icons/arrow-up-arrow-down.svg"
import right from "../../assets/icons/arrow-right.svg"
import left from "../../assets/icons/arrow-left.svg"
import trailer from "../../assets/icons/trailer.svg"
import truck from "../../assets/icons/truck.svg"
import GeoLocator from "../../assets/icons/GeoLocator.svg"
import Check from "../../assets/icons/check.svg"
import Circle1 from "../../assets/icons/circle1.svg"
import circle2 from "../../assets/icons/circle2.svg"
import Wrench from "../../assets/icons/wrench.svg"
import tyre from "../../assets/icons/tire.svg"
import exclaim from "../../assets/icons/circle-exclamation.svg"
import tyre2 from "../../assets/icons/tire2.svg"
import WarningIcon from "../../assets/icons/warning.svg"
import image from "../../assets/img/Image.png"
import image2 from "../../assets/img/Image2.png"
import CaretRight from "../../assets/icons/caret-right.svg"


export const movements =  {
  header: "Movements",
  icon: swap,
  inner: [
    {
      title: "Check Ins",
      icon: right,
      amount: 142
    },
    {
      title: "Check Outs",
      icon: left,
      amount: 125
    }
  ],
  value: true
}
export const Yard = {
  header: "Yard",
  icon: GeoLocator,
  inner: [
    {
      title: "Trailer Count",
      icon: trailer,
      amount: 154
    },
    {
      title: "Check Outs",
      icon: truck,
      amount: 75
    }
  ],
  value: true
}
export const TrailerStatus = {
  header: "Trailer Status",
  icon: Check,
  inner: [
    {
      title: "Loaded",
      icon: Circle1,
      amount: 71
    },
    {
      title: "Empty",
      icon: circle2,
      amount: 83
    }
  ],
  value: false
  }

export const issues = {
  header: "Issues",
  icon: Wrench,
  value: true,
  text: "Most Recent",
  info: {
    title: "Open Issues",
    amount: 46,
    icon: exclaim ,
  },
  recent: [
    {
       id: 53137 ,
    image: image2,
    detail: "Missing Hose",
    icon: CaretRight ,
    warning: WarningIcon,
    },
    {
      id: 53138 ,
   image: image2,
   detail: "Missing Hose",
   icon: CaretRight,
   warning: WarningIcon,
    },
    {
      id: 53139 ,
   image: image2,
   detail: "Missing Hose",
   icon: CaretRight ,
   warning: WarningIcon,
    },
    {
      id: 53140 ,
   image: image2,
   detail: "Missing Hose",
   icon:CaretRight ,
   warning: WarningIcon,
    },
    {
      id: 53141 ,
   image: image2,
   detail: "Missing Hose",
   icon:CaretRight ,
   warning: WarningIcon,
   },
   
  ]
}
export const TyreInspections = {
  header: "Tyre Inspections",
  icon: tyre,
  value: true,
  text: "Latest Inspections",
  info: {
    title: "Failed Inspection",
    amount: 7,
    icon: exclaim ,
  },
  recent: [
    {
      id: 106 ,
    image: image,
    detail: "Position 5, 4/32nds ",
    icon: CaretRight,
    warning: WarningIcon,
    tyre: tyre2,
    },
    {
      id: 107 ,
    image: image,
    detail: "Position 5, 4/32nds ",
    icon: CaretRight,
    warning: WarningIcon,
    tyre: tyre2,
    },
    {
      id: 108 ,
    image: image,
    detail: "Position 5, 4/32nds ",
    icon: CaretRight,
    warning: WarningIcon,
    tyre: tyre2,
    },
    {
      id: 109 ,
    image: image,
    detail: "Position 5, 4/32nds ",
    icon: CaretRight,
    warning: WarningIcon,
    tyre: tyre2,
    },
    {
      id: 110 ,
    image: image,
    detail: "Position 5, 4/32nds ",
    icon: CaretRight,
    warning: WarningIcon,
    tyre: tyre2,
    },

    
  ]
  }