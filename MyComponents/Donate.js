import React from 'react'

export default function Donate() {
  return (
    <>
<div className="container">
  <h5 className="section-title h1 contact">दान-दक्षिणा </h5>
  <div className="sortbox">
    <span>
      <i className="fa fa-search sort" />
      <input
        className="inputsearch"
        type="text"
        id="myInput"
        onkeyup="myFunction()"
        placeholder="Search"
        title="Type in a name"
      />
    </span>
  </div>
  <table id="myTable">
    <tbody>
      <tr className="header">
        <th>दान-दाता का नाम</th>
        <th>पता</th>
        <th>मो. नम्बर</th>
      </tr>
      <tr>
        <td>demo</td>
        <td>demo</td>
        <td>demo</td>
      </tr>
    </tbody>
  </table>
</div>
</>
  )
}
