import React, { Component } from "react";
import { connect } from "react-redux";
import { decraseCounter } from "../redux/actions/counterActions";
import { bindActionCreators } from "redux";

class DecreaseCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(decraseCounter());
          }}
        >
          Dec
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(decraseCounter, dispatch) };
}

export default connect(mapDispatchToProps)(DecreaseCounter);
