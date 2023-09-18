import { Navbar } from "./Components/Navbar"
import { Tareas } from "./Components/Tareas";

export const TaskList = () =>{

    const TareasRutinarias = [ 
        { 
            id: 1, 
            Texto: "Tender la cama", 
            Estado: "Realizado",
        },

        {
            id: 2, 
            Texto: "Barrer el cuarto",
             Estado: "Realizado",
         },
        { 
            id: 3, 
            Texto: "Bañarse", 
            Estado: "Realizado",
        },
        {
            id: 4, 
            Texto: "Preparar el desayuno", 
            Estado: "Realizado",
        },
        {
            id: 5, 
            Texto: "Alistar las cosas", 
            Estado: "Realizado",
        },
        {
            id: 6, 
            Texto:"Desayunar", 
            Estado: "Realizado",
        },
        {
            id: 7, 
            Texto:"Ir al trabajo", 
            Estado: "Pendiente",
        }
    ];



    return(
        <section className="container">
            <Navbar />
            <div className="containertarea">
            {
            TareasRutinarias.map((Tarea)=>(

                < Tareas {...Tarea}/>
            ))
            }
        </div>
        </section>
        
    )
}