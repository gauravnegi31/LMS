import { createContext } from "react";

export const Context = createContext(null);

export const BatchsearchProvider = (props) =>{
    const OBJ = [
        { course: "MERN STACK", name: "Gaurav Negi", date: "2023-09-23 To 2023-12-31", time: "10:00 AM - 12:00 PM"},
            { course: "MERN STACK", name:  "Gaurav Negi", date: "2024-03-04 To 2024-05-11", time: "10:00 AM - 12:00 PM"},
            { course: "MERN STACK", name:  "Gaurav Negi", date: "2024-03-13 To 2024-07-13", time: "4:30 PM - 6:30 PM"},
            { course: "Digital Marketing", name:  "Gaurav Negi", date: "2024-04-15 To 2024-05-25", time: "3:00 PM - 4:30 PM" },
            { course: "MERN STACK", name:  "Gaurav Negi", date: "2024-05-13 To 2024-11-16", time: "4:30 PM - 6:30 PM"},
            { course: "Digital Marketing", name:  "Gaurav Negi", date: "2024-06-24 To 2024-08-06", time: " 12:00 PM - 2:00 PM" },
      ];

      return (
      <Context.Provider value = {{OBJ}}>{props.children}</Context.Provider>
      )
    }