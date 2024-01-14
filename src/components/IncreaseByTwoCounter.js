import React, { Component } from "react";
import { connect } from "react-redux";
import { incraseByTwoCounter } from "../redux/actions/counterActions";
import { bindActionCreators } from "redux";

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        {" "}
        <button
          onClick={(e) => {
            this.props.dispatch(incraseByTwoCounter());
          }}
        >
          Double Inc
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(incraseByTwoCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);
