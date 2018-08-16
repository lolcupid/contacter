import React from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case "DELETE_CONTACT" :
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload)
      }
    case "ADD_CONTACT" :
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
    default :
     return state;
  }
}

export class Provider extends React.Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Lol Cupid",
        email: "cupid451992@gmail.com",
        phone: "555-555 - 555"
      },
      {
        id: 2,
        name: "Spider",
        email: "spider92@gmail.com",
        phone: "123-456-789"
      },
      {
        id: 3,
        name: "kk",
        email: "kk1992@gmail.com",
        phone: "11-22-333"
      },
    ],
    dispatch: (action) => this.setState((state) => {
      return reducer(state, action);
    })
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;