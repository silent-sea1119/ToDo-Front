import { useState, useEffect, useContext } from 'react';
import TodoContext from '../../context/TodoContext';
import api from '../../services/api';
import './style.css';

export default function TodoSubmit(){
    const {todo, setTodo} = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState({
        title: '',
        type: 'Estudo',
        done: false,
        createAt: Date.now()
    });
    const [msg, setMsg] = useState('');

    useEffect(()=>{
        setNewTodo(todo);
    },[todo])

    const resetTodo = ()=>{
        setTodo({
            title: '',
            type: 'Estudo',
            done: false,
            createAt: Date.now()
        });
        setNewTodo({
            title: '',
            type: 'Estudo',
            done: false,
            createAt: Date.now()
        })
    }

    async function handleSubmitAdd(){
        if(!newTodo.title){
            setMsg('Error, Campo título obrigatório!');
            return;
        }

        try{
            api.post('/notes', newTodo);
            setMsg('Salvo com sucesso!');
        }catch(e){
            console.log(e.error);
            setMsg('Error no registro da ToDo, tente novamente mais tarde.');
        }

        resetTodo();
    }

    async function handleSubmitChange(){
        if(!newTodo.title){
            setMsg('Error, Campo título obrigatório!');
            return;
        }

        setTodo({...newTodo, _id: todo._id});

        try{
            api.put(`/notes/${todo._id.toString()}`, {...newTodo, _id: todo._id});
            setMsg('Modificado com sucesso!');
        }catch(e){
            console.log(e.error);
            setMsg('Error no registro da ToDo, tente novamente mais tarde.');
        }
        resetTodo();
    }

    return(
        <>
            <form onSubmit={(e)=>{e.preventDefault();!todo._id?handleSubmitAdd():handleSubmitChange()}} className="todo-add">
                <input type="text" placeholder="Digite aqui" maxLength={45} value={newTodo.title} onChange={(e)=>setNewTodo({...newTodo,title: e.target.value})}/>
                <select value={newTodo.type} name="select" onChange={(e)=>setNewTodo({...newTodo,type: e.target.value})}>
                    <option value="Estudo">Estudo</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Vida pessoal">Vida pessoal</option>
                    <option value="Outros">Outros</option>
                </select>
                <button type="submit" className="Add">
                    {todo._id?<svg xmlns="http://www.w3.org/2000/svg" fill="#77dd77" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                    :
                    <img src={'/add.svg'} height={48} width={48} alt="Adicionar"/>}
                </button>
            </form>
            {msg[0] === 'E'?<span style={{fontSize: '12px',color: '#f00'}}>{msg}</span>:<span style={{fontSize: '12px',color: '#77dd77'}}>{msg}</span>}
        </>
    )
}