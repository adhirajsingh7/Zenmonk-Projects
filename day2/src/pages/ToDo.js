const ToDo = ({toDo ,handleToggle})=>{
    
    const handleClick =(e)=>{
        // console.log('clicked')
        handleToggle(e.currentTarget.value)
    }

    return (
        
        <div id={toDo.id} key={toDo.id + toDo.Task} name="toDo" value={toDo.id} onClick={handleClick} className={toDo.Complete ? 'strike' : ''}>
             
            {
                toDo.Task
                }
        </div>
        
    )
}

export default ToDo;