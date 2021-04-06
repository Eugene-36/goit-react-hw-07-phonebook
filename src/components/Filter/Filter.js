import React, { Component } from "react";

import filterUser from "../../redux/actions/userActions";
import { connect } from "react-redux";

//console.log(props);
const Filter = ({ value, onChange }) => {
  //console.log(value);
  // const { value, onChange } = this.props;
  // console.log(value);
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          className="TodoFilter__input"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.allUsers.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(filterUser.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
