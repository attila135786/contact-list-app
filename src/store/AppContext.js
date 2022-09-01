import React from "react";
import { v4 as uuidv4 } from "uuid";
const people = [];
for (let i = 0; i < 100; i++) {
  people.push({
    firstName: "Ethan",
    lastName: "Hasson",
    phoneNumber: "(123)-456-7890",
    email: "Test@gmail.com",
    id: uuidv4(),
  });
}
export const getEmptyContact = () => {
  return {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  };
};

export const defaultState = {
  people,
  openCard: null,
  setAppState: () => {},
  openModal: null,
};

export const AppContext = React.createContext(defaultState);
