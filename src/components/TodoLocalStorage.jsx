import React from "react";

const todoKey = "reactTodo";

export const getLocalStorageTodo = () => {
  try {
    const rawTodo = localStorage.getItem(todoKey);
    if (!rawTodo || rawTodo === "undefined") return [];
    return JSON.parse(rawTodo);
  } catch (error) {
    console.error("Error parsing todo from localStorage:", error);
    return [];
  }
};

export const setLocalStorageTodo = (task) => {
  localStorage.setItem(todoKey, JSON.stringify(task));
};
