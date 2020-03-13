import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
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
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
