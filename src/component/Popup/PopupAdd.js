import css from './popup.module.css';
import Button from '../Button/Button';
import exit from '../../images/x_icon.png';
import save from '../../images/save.png';
import { Component } from 'react';

export default class PopupAdd extends Component {
  state = {
    name: '',
    phone: '',
    age: '',
    address: '',
    text: '',
    image: '',
    infoFlag: false,
    editFlag: false,
  };

  editName = event => {
    console.log(this.props.arr);

    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  };

  editPhone = event => {
    console.log(this.props.arr);

    this.setState(() => {
      return {
        phone: event.target.value,
      };
    });
  };

  editAge = event => {
    console.log(this.props.arr);

    this.setState(() => {
      return {
        age: event.target.value,
      };
    });
  };

  editAddress = event => {
    console.log(this.props.arr);

    this.setState(() => {
      return {
        address: event.target.value,
      };
    });
  };

  editNote = event => {
    console.log(this.props.arr);

    this.setState(() => {
      return {
        text: event.target.value,
      };
    });
  };

  // saving the added contact
  // i don't know why but is save twice
  saveMe = () => {
    console.log(this.props.arr);

    let newCon = this.state;
    this.setState(() => {
      return {
        arr: this.props.arr.push(newCon),
        displayAdd: false,
      };
    });
    console.log(this.props.arr);
    // this.props.fun();
  };

  render() {
    return (
      <div className={css.popup}>
        <Button src={exit} fun={this.props.fun} />
        <p>
          Name:{' '}
          <input
            type='text'
            name='name'
            className='add'
            onChange={this.editName}
          />
        </p>
        <p>
          Phone Number:{' '}
          <input
            type='text'
            name='phone'
            className='add'
            onChange={this.editPhone}
          />
        </p>
        <p>
          Age:{' '}
          <input
            type='text'
            name='age'
            className='add'
            onChange={this.editAge}
          />
        </p>
        <p>
          Address:{' '}
          <input
            type='text'
            name='address'
            className='add'
            onChange={this.editAddress}
          />
        </p>
        <p>
          Note:{' '}
          <input
            type='text'
            name='note'
            className='add'
            onChange={this.editNote}
          />
        </p>
        <p>
          Image:{' '}
          <input type='file' accept='image/jpeg, image/png, image/jpg'></input>
        </p>
        <Button
          src={save}
          fun={() => {
            this.saveMe();
          }}
        />
      </div>
    );
  }
}
