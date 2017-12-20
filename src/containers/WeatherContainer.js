import React, { Component } from "react";
import * as actions from "./../actions";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";

class WeatherContainer extends Component {
  render() {
    console.log(this.props.data);
    return (
      <Container fluid textAlign="center">
        <h1>hello</h1>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps, actions)(WeatherContainer);
