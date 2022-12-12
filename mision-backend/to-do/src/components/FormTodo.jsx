import React from "react";

const FormTodo = props => {
    const [description, setDescription] = useState("");
    return(
        <form>
            <div className="todo-list">
                <div className="input">
                    <input 
                    type="text" 
                    className="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />
                </div>
            </div>
        </form>
    );
}

export default FormTodo;