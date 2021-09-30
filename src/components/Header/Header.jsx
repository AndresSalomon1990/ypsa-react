import React from 'react';
import './Header.css';
import logo from '../../logos/slp-logo.jpg';

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo Sueñolar" />
      <h1>BIENVENIDO A NUESTOR PORTAL DE REALIDAD AUMENTADA</h1>
    </div>
  )
}
