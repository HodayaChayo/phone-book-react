import contact1 from '../../images/contact1.png';
import exit from '../../images/x_icon.png';
import Button from '../Button/Button';
import css from './popup.module.css';

export default function PopupInfo(props) {
  const { image, name, phone, age, address, text } = props.obj;
  return (
    <div className={css.popup}>
      <Button src={exit} fun={props.fun} />
      <p>Name: {name}</p>
      <p>Phone Number: {phone}</p>
      <p>Age: {age}</p>
      <p>Address: {address}</p>
      <p>Note: {text}</p>
      <img src={image || contact1} alt='contactImage' />
    </div>
  );
}
