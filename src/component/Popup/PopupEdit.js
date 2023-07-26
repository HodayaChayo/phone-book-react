import css from './popup.module.css';
import Button from '../Button/Button';
import exit from '../../images/x_icon.png';
import save from '../../images/save.png';
import { Component } from 'react';

export default class PopupEdit extends Component {
  state = {
    name: this.props.obj.name,
    phone: this.props.obj.phone,
    age: this.props.obj.age,
    address: this.props.obj.address,
    text: this.props.obj.text,
    image: this.props.obj.image,
    infoFlag: false,
    editFlag: false,
  };

  editName = event => {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  };

  editPhone = event => {
    this.setState(() => {
      return {
        phone: event.target.value,
      };
    });
  };

  editAge = event => {
    this.setState(() => {
      return {
        age: event.target.value,
      };
    });
  };

  editAddress = event => {
    this.setState(() => {
      return {
        address: event.target.value,
      };
    });
  };

  editNote = event => {
    this.setState(() => {
      return {
        text: event.target.value,
      };
    });
  };

  // edit function - it is edit this component state but not the main component state
  saveMe = () => {
    let update = this.state;
    console.log(update);
    setTimeout(() => {
      this.setState(() => {
        let curr = this.props.arr.map(el => {
          if (el.phone === update.phone) {
            return {
              ...el,
              name: update.name,
              phone: update.phone,
              age: update.age,
              address: update.address,
              text: update.text,
              editFlag: false,
            };
          } else {
            return el;
          }
        });
        console.log(curr);
        return {
          arr: curr,
        };
      });
    }, 100);
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
            value={this.state.name}
            onChange={this.editName}
          />
        </p>
        <p>
          Phone Number:
          <input
            type='text'
            name='phone'
            value={this.state.phone}
            onChange={this.editPhone}
          />
        </p>
        <p>
          Age:{' '}
          <input
            type='text'
            name='age'
            value={this.state.age}
            onChange={this.editAge}
          />
        </p>
        <p>
          Address:
          <input
            type='text'
            name='address'
            value={this.state.address}
            onChange={this.editAddress}
          />
        </p>
        <p>
          Note:{' '}
          <input
            type='text'
            name='note'
            value={this.state.text}
            onChange={this.editNote}
          />
        </p>
        <p>
          Image:{' '}
          <input
            type='file'
            accept='image/jpeg, image/png, image/jpg'
            value={this.state.image}
            onChange={event => {
              console.log(event.target.files[0]);
            }}
          ></input>
        </p>
        <Button
          src={save}
          fun={() => {
            this.props.fun();
            this.saveMe();
          }}
        />
      </div>
    );
  }
}
