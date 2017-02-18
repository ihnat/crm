import React from 'react';

export default function Header(props) {
  return (
    <header>
      <h2>Header</h2>
      {props.children}
    </header>
  )
}
