import css from './button.module.css';
// import PopupInfo from "../Popup/PopupInfo"

export default function Button(props) {
  return (
    <img
      className={css.button}
      src={props.src}
      alt={props.alt}
      onClick={props.fun}
    />
  );
}
