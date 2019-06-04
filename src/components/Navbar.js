import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import Styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img
            src={logo}
            height="100px"
            width="100px"
            alt="store"
            className="navbar-brand"
          />
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>

        <Link className="ml-auto" to="/cart">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = Styled.nav`
background: var(--mainBlue);
.nav-link{
  color: var(--mainWhite)!important;
  font-size:1.3rem;
  text-transform: capitalize;
}


`;
