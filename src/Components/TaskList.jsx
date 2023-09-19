import { useState } from "react";

export const TaskList = () =>{
    const tareasRutinarias = [ { 
        id: 1, 
        tarea: "Tender la cama", 
        completado: true
    },{
        id: 2, 
        tarea: "Barrer el Cuarto", 
        completado: false
    }, { 
        id: 3, 
        tarea: "Bañarse", 
        completado: false
    },{
        id: 4, 
        tarea: "Preparar el Desayuno", 
        completado: false
    },{
        id: 5, 
        tarea: "Alistar las Cosas", 
        completado: false
    },{
        id: 6, 
        tarea:"Desayunar", 
        completado: false
    },{
        id: 7, 
        tarea:"Ir al Trabajo", 
        completado: false
    }]
    const [tareas, setTareas] = useState(tareasRutinarias)

    const onEliminarTarea = (id) =>{
        const eliminarTarea= tareas.filter((tarea)=>(
            tarea.id !== id
        ))
       setTareas(eliminarTarea)
    }
    const onCompletarTarea =(id) =>{
        const completarTarea= tareas.map((tarea)=>(
            tarea.id === id ? {...tarea,completado:true} : tarea
        )) 
    setTareas(completarTarea)
    }

    const onActualizarTarea =(id) =>{
        const actualizarTarea= tareas.map((tarea)=>(
            tarea.id === id ? {...tarea, completado: true} : tarea
        ))
        setTareas(actualizarTarea)
    }
return(
    <div className="container">
        <br />
        <h1>TAREAS</h1>
        <br />
            {
                tareas.map((tarea)=>(
                    <div>
                        <p style={{background: `${tarea.completado === true ? "lime" : "orangered"}` , color: "white"}}>{tarea.tarea} - {tarea.completado === true ? "COMPLETADO" : "FALTA"}</p>
                        <p>{tarea.tarea}</p>
                        <button onClick={()=>onCompletarTarea(tarea.id)}>Completar Tarea</button>
                        <button onClick={()=>onEliminarTarea(tarea.id)}>Eliminar Tarea</button>
                        
                    </div>
                    
                ))
            }
            <br />
            <button onClick={()=>setTareas(tareasRutinarias)}>Restablecer Tareas</button>
        </div>

)

}
