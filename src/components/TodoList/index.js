import { useContext, useEffect, useState } from "react";
import TodoContext from "../../context/TodoContext";
import Todo from "../Todo";
import Api from '../../services/api';
import './style.css'

export default function TodoList(){
    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useState(null);
    const {todo} = useContext(TodoContext);

    const handleRequestNotes = todos?todos.map((todo,index)=>{
        return <Todo key={index} todo={todo}/>
    }):null;

    useEffect(() => {
        async function getAllNotes(){
            const response = await Api.get('/notes');
            setTodos(response.data);
        }
        getAllNotes();
    },[todo]);

    useEffect(()=>{
        if(todos && todos.length){
            setLoading(false);
        }
    },[todos])

    return(
        <div className="todo-list">
            {loading?<p style={{textAlign: 'center', opacity: 0.5}}>Vazio, Crie uma :)</p>:handleRequestNotes}
        </div>
    );
}