import contact1 from "../../images/contact1.png"
import css from "./contact.module.css"

export default function Contact(props){
  const {image, name
    // phone, age, address, text
  } = props.obj
  return(
    <div className={css.contact}>
      <img src={image || contact1} alt="contact" />
      <p>{name}</p>
    </div>
  )
}