import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Ulises Lima",
        email: "uliseslima@gmail.com",
        phone: "9999999999"
      },
      {
        id: 2,
        name: "Karen Schmandelson",
        email: "karenthecaptain@gmail.com",
        phone: "01223 99999999"
      },
      {
        id: 3,
        name: "Richard Rickstein",
        email: "richyboy@gmail.com",
        phone: "07812 948 318"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
