import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoDate from "./components/TodoDate";
import {
  getLocalStorageTodo,
  setLocalStorageTodo,
} from "./components/TodoLocalStorage";

export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodo());

  // form submit
  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;

    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  setLocalStorageTodo(task);

  // todo delete button start

  const handleDelete = (value) => {
    console.log(value);
    setTask((prevTasks) => prevTasks.filter((task) => task.content !== value));
  };

  // todo delete button
  const handleChecked = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };
  // clear all todo list

  const handleClearAll = () => {
    setTask([]);
  };

  return (
    <section className="items-center flex flex-col min-h-[100vh] pt-3% bg-gradient-to-br from-[#001214] to-[#001f29] text-white transition-all duration-300 ease-linear overflow-hidden ">
      <header>
        <h1 className="">Add your task</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="flex justify-center items-center max-w-[1200px] mx-auto">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDelete={handleDelete}
                onHandleChecked={handleChecked}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button
          className="bg-amber-700 text-amber-50 uppercase rounded-xl border-2 p-[10px] m-[10px] "
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </section>
    </section>
  );
};
