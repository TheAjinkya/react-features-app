import React, { useState } from "react";

export const FirstCounter = () => {

  const initialName = {
    firstName : 'Ajinkya',
    lastName : 'Chanshetty'
  }  

  const initialEmp = [10, 20, 30, 40, 50]

  const initialEmployee = [{ firstName: 'A', lastName:'B'}]

  const [count, setCount] = useState(0);
  const [name, setName] = useState(initialName);
  const [emp, setEmp] = useState(initialEmp);
  const [employee, setEmployee] = useState(initialEmployee);

  const increment = () => {
    setCount((count) => count + 1);
    setName({...name, firstName : 'ABC', lastName: 'XYZ'})
    setEmp([20, 20, 20])
    setEmployee()
  };

  return (
    <div>
      Counter: {count} <br />
      Name: {name.firstName} {name.lastName}
      <button onClick={increment}>Increment</button> <br/>
      {emp.map(iterator=>iterator)}
    </div>
  );
};
