import React from "react";
import { useDispatch } from "react-redux";
import { complete } from "../../redux/helperFunctions";

const ItemTask = ({ id, name, isActive }) => {
  const dispatch = useDispatch();

  return (
    <label className="itemWrap">
      <input
        type="checkbox"
        id={id}
        value={isActive}
        onChange={(e) => dispatch(complete({ id, isActive: e.target.checked }))}
      />

      <li className="listItem">{name}</li>
    </label>
  );
};

export default ItemTask;
