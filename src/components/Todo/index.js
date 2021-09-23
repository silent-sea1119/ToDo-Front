import { useState, useContext } from 'react';
import Modal from '../Modal';
import TodoContext from '../../context/TodoContext';
import api from '../../services/api';
import './style.css';

export default function Todo(props){
    const { setTodo } = useContext(TodoContext);
    const [done, setDone] = useState(props.todo.done);
    const [del, setDel] = useState(false);

    async function handleDelete(){
        setTodo({
            title: '',
            type: 'Estudo',
            done: false,
            createAt: Date.now()
        });
        api.delete(`/notes/${props.todo._id.toString()}`);
        setDel(false);
    }

    return(
        <div className={done?"todo-done":"todo"}>
            <div className="info">
                {done?
                    <button onClick={()=>setDone(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="green" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"/></svg>
                    </button>
                    :
                    <button onClick={()=>setDone(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1c6.065 0 11 4.935 11 11s-4.935 11-11 11-11-4.935-11-11 4.935-11 11-11zm0-1c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/></svg>
                    </button>
                }
                <div className="text-content" onClick={()=>{setTodo(props.todo)}}>
                    <h3>{props.todo.title}</h3>
                    <p>{props.todo.type}</p>
                </div>
            </div>
            <button onClick={()=>setDel(true)} style={{marginRight: '15px'}}>
                <svg fill="#666" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px"><path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"/></svg>
            </button>
            {del&&
            <Modal>
                <svg fill="#f00" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="128px" height="128px"><path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"/></svg>
                <h2>Deseja excluir?</h2>
                <div className="modal-buttons">
                    <button className="del-button" onClick={()=>handleDelete()}>SIM</button>
                    <button className="not-button" onClick={()=>setDel(false)}>NÃO</button>
                </div>
            </Modal>
            }
        </div>
    )
}