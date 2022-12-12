import React from "react";
import FormTodo from './FormTodo';
import TaskList from './TaskList';
import Checkbox from './Checkbox';
//funcion anonima
const Container = () => {
 return(
    <div>
        <FormTodo/>
        <TaskList/>
    </div>
 );
}

export default Container