import { Component } from "react";
import "./App.css";

import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Phonebook</h1>
          <Form />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    );
  }
}

export default App;
