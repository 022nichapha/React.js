import React from "react";
import { phones } from "../data/phones";

const PhoneList = () => {
  return (
    <div>
      <h2>List of Phones</h2>
      <ul>
        {phones.map((phone) => (
          <li key={phone.id}>
            <h3>
              {phone.name} ({phone.brand})
            </h3>
            <p>{phone.description}</p>
            <p>Price: {phone.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneList;
