import React from "react";
import { connect } from "react-redux";

const Number = ({ number }) => {
  return <h1>{number}</h1>;
};

const mapStateToProps = store => ({
  Number: store.counter.number
});

export default connect(mapStateToProps)(Number);
