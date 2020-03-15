import React, { Component } from "react";

const Context = React.createContext();

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
    ]
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
