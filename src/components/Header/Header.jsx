import React, { Component } from "react";
import { connect } from "react-redux";
import "./Header.css";

export class Header extends Component {
  render() {
    return <div>Header</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
