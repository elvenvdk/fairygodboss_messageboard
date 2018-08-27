import * as types from "../actions/types";
const date = new Date();
const INITIAL_STATE = {
  items: [],
  responseItems: [],
  month: date.getMonth(),
  day: date.getDate(),
  year: date.getFullYear(),
  hour: date.getHours(),
  minutes: date.getMinutes(),
  counter: 0
};

let newItems = {};
const storeTaskInLocalStorage = task => {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_POST:
      newItems = {
        items: action.payload,
        month: state.month + 1,
        day: state.day,
        year: state.year,
        hour: state.hour,
        minutes: state.minutes,
        counter: state.counter + 1
      };
      storeTaskInLocalStorage(newItems);
      return {
        ...state,
        items: [newItems, ...state.items],
        counter: state.counter + 1
      };
    case types.GET_POSTS:
      return { ...state };
    case types.SELECT_POST:
      return {
        ...state,
        items: state.items.filter(item => item.counter === action.payload)
      };
    case types.ADD_RESPONSE:
      return {
        ...state,
        responseItems: [action.payload, ...state.responseItems]
      };
    default:
      return state;
  }
};

export default postReducer;
