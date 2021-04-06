import React from "react";
import { v4 as unId } from "uuid";
import Contacts from "./Contacts.module.css";
import { connect } from "react-redux";
import actions from "../../redux/actions/userActions";
// import actions from "../../redux/actions/userActions";
const ContactList = ({ allUsers, onDelete }) => (
  <ul className="TodoList">
    {allUsers.map(({ id, name, number }) => (
      <li key={unId()} className="listStyle">
        <p className="TodoList__text">
          {name}:{number}
        </p>
        <button
          type="button"
          className="TodoList__btn"
          onClick={() => onDelete(id)}
        >
          Remove
        </button>
      </li>
    ))}
  </ul>
);

const filterContacts = (allContacts, filter) => {
  console.log(filter);
  const normalizedFilter = filter.toLocaleLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
console.log(filterContacts);

//const mapStateToProps = (store) => ({ allUsers: store.allUsers });
const mapStateToProps = ({ allUsers: { contacts, filter } }) => ({
  allUsers: filterContacts(contacts, filter),
  //console.log(filter, contacts);
});
// const mapStateToProps = (allUsers) => console.log(allUsers.allUsers);

const mapDispatchToProps = {
  onDelete: (id) => actions.deleteUser(id),
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
