import React, {useState} from "react";

//props recibe los items de Container
const FormTodo = props => {
    const [description, setDescription] = useState("");
    
    const {addItem} = props;

    const handleSubmit = e =>  {
        //quita el comportamiento por defecto del elemento (reload)
        e.preventDefault();
        console.log(description)

        //estado del DOM (Estatus de la tarea)
        addItem({
            done: false,
            id: (+new Date().toString),
            description
        });

        //resetear la descripcion para que este vacia luego de agregar
        setDescription("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="input">
                    <input 
                    type="text" 
                    className="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />
                    <button className="button pink" disable={description ? "": "disabled"} 
                     /* if (description == "") {
                    disable="disabled"
                    } else {
                        disable=""
                    }*/
                    >
                        Agregar Tarea
                    </button>   
                </div>
            </div>
        </form>
    );
}

export default FormTodo;