import React from "react";
import { connect } from "react-redux";

const Number = () => {
  return <h1>0</h1>;
};

const mapStateToProps = store => ({
  Number: store.counter
});

export default connect()(Number);
