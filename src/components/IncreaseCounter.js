import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { incraseCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";

class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(incraseCounter());
          }}
        >
          Inc
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(incraseCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseCounter);
