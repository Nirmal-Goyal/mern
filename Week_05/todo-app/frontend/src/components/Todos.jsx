// export function Todos(){
//     return <div>
//         <h1>go to gym</h1>
//         <h2>go to gym from 7-9 pm</h2>
//         <button>mark as completed</button>
//     </div>
// }

export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h3>{todo.description}</h3>

                <button>{todo.completed == true ? "Completed" : "Mark as Completed"}</button>
            </div>
        })}
    </div>
}