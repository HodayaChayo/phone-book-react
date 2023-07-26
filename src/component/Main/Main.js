// made by Hodaya & Ezra Chayu
import { Component } from 'react';
import { contacts } from './contactsData';
import css from './main.module.css';
import uuid from 'react-uuid';
import Contact from '../Contact/Contact';
import PopupInfo from '../Popup/PopupInfo';
import PopupEdit from '../Popup/PopupEdit';
import PopupAdd from '../Popup/PopupAdd';
import Button from '../Button/Button';
import info from '../../images/info_icon.png';
import edit from '../../images/edit_icon.png';
import deleteIcon from '../../images/delete_icon.png';
import add from '../../images/add.png';

class Main extends Component {
  state = {
    arr: contacts,
    displayAdd: false,
    searchVal: '',
  };

  // delete one contact
  delete = contact => {
    this.setState(prevState => {
      let curr = prevState.arr;
      curr = curr.filter(el => el !== contact);
      return {
        arr: curr,
      };
    });
  };

  // delete all contact
  deleteAll = () => {
    this.setState(() => {
      const emptyArr = [];
      return {
        arr: emptyArr,
      };
    });
  };

  addContact = newContact => {
    this.setState(prevState => {
      let curr = prevState.arr;
      curr.push(newContact);

      return {
        arr: curr,
        displayAdd: !prevState.displayAdd,
      };
    });
  };

  // function to display info popup
  displayInfo = contact => {
    let flag = contact.infoFlag;
    this.setState(prevState => {
      const curr = prevState.arr.map(el => {
        if (el.phone === contact.phone) {
          return { ...el, infoFlag: !flag };
        } else {
          return el;
        }
      });
      return {
        arr: curr,
      };
    });
  };

  // function to display edit popup
  displayEdit = contact => {
    let flag = contact.editFlag;
    this.setState(prevState => {
      const curr = prevState.arr.map(el => {
        if (el.phone === contact.phone) {
          return { ...el, editFlag: !flag };
        } else {
          return el;
        }
      });
      return {
        arr: curr,
      };
    });
  };

  // function to display add popup
  displayAdd = () => {
    this.setState(prevState => {
      return {
        arr: prevState.arr,
        displayAdd: !prevState.displayAdd,
      };
    });
  };

  // search function
  search = event => {
    console.log(event.target.value);
    this.setState(prevState => {
      return {
        arr: prevState.arr,
        displayAdd: prevState.displayAdd,
        searchVal: event.target.value,
      };
    });
  };

  saveMe = update => {
    console.log(update);
    this.setState(prevState => {
      let curr = prevState.arr.map(el => {
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
  };

  render() {
    let sortedList = this.state.arr.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    const contactList = sortedList.map(contact => {
      let res = (
        <div className={css.list} key={uuid()}>
          <Contact obj={contact} />
          <Button
            src={info}
            alt='info'
            fun={() => {
              this.displayInfo(contact);
            }}
          />
          <Button
            src={edit}
            alt='edit'
            fun={() => {
              this.displayEdit(contact);
            }}
          />
          <Button
            src={deleteIcon}
            alt='delete'
            fun={() => {
              this.delete(contact);
            }}
          />
          {contact.infoFlag && (
            <PopupInfo
              obj={contact}
              fun={() => {
                this.displayInfo(contact);
              }}
            />
          )}
          {contact.editFlag && (
            <PopupEdit
              arr={contacts}
              obj={contact}
              fun={() => {
                this.displayEdit(contact);
              }}
              // fun2={() => {
              //   this.saveMe();
              // }}
            />
          )}
        </div>
      );
      if (
        this.state.searchVal === '' ||
        contact.name.toLowerCase().includes(this.state.searchVal.toLowerCase())
      ) {
        return res;
      } else {
        return null;
      }
    });

    return (
      <main>
        <div className={css.tools}>
          <input type='text' placeholder='search' onChange={this.search} />
          <Button
            src={add}
            alt='add'
            fun={() => {
              this.displayAdd();
            }}
          />
          <Button
            src={deleteIcon}
            alt='deleteAll'
            fun={() => {
              this.deleteAll();
            }}
          />
        </div>
        <div className='listContainer'>{contactList}</div>
        {this.state.displayAdd && (
          <PopupAdd
            arr={contacts}
            displayAdd={this.state.displayAdd}
            fun={() => {
              this.displayAdd();
            }}
          />
        )}
      </main>
    );
  }
}

export default Main;
