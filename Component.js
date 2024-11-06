 ############## Functional Component############
A functional component is basically a JavaScript/ES6 function that returns a React element (JSX).
According to React's official docs, the function below is a valid functional component:
  it is simple functions
Use Func components as much as possible
Absence of 'this' keyword
Solution without using state
mainly responsible for UI
statlesss/Dumb/presenetational
import React from 'react'
const Greet=()=><h1>Hello pantrangi</h1>
export default Greet;
############  Class Componennt#############
Class component should return in the render method() and it should be maintained an internal state for that component

More features rich
Maintain their own private state
Complex UI logic
Provide lifecycle hooks
import React, { Component } from "react";
class Hi extends Component
{
render()
{
    return <h1>Meyy kavya chaduvu meyy</h1>
}
}
export default Hi;
