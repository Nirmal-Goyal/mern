import { useState } from "react";

export function CreateTodo(){

    //react query
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");

    return <div>
        <input id="title" style={{
            padding: 10,
            margin: 10,
        }} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(value)
        }}/><br />
        <input id="description" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(value)
        }} /><br />

        <button style={{
            padding: 5,
            margin: 10,
            backgroundColor: "green",
            borderRadius: 5,
            cursor: "pointer"
        }} onClick={()=>{
            //axios
            fetch('http://localhost:3000/todos', {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "contentType": "application/json"
                }
            })
            .then(async function(res) {
                const json = await res.json();
                alert("TODO added");
            })
        }}>Add a Todo</button>

    </div>
}