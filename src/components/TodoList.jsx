import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export default function TodoList({
  onHandleChecked,
  checked,
  data,
  onHandleDelete,
}) {
  return (
    <li className="todo-item">
      <span className={checked ? "line-through" : "no-underline"}>{data}</span>
      <button className="check-btn" onClick={() => onHandleChecked(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onHandleDelete(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
}
