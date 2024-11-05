import React from "react";
import { tablets } from "../data/tablets";

const TabletList = () => {
  return (
    <div>
      <h2>List of Tablets</h2>
      <ul>
        {tablets.map((tablet) => (
          <li key={tablet.id}>
            <h3>
              {tablet.name} ({tablet.brand})
            </h3>
            <p>{tablet.description}</p>
            <p>Price: {tablet.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabletList;
