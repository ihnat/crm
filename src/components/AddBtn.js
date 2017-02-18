import React from 'react';


export default function AddBtn({ fields }) {
  return (
    <button type="button" onClick={() => fields.push()}>Add Member</button>
  )
}
