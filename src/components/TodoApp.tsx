import { useState } from "react"
import { ListaTareas } from "./ListaTareas"


export const TodoApp = () => {
	const [nuevaTarea, setNuevaTarea] = useState<string>('')
	const [listaTareas, setListaTareas] = useState<string[]>([])
	const agregarTarea = () => {
		if (nuevaTarea.trim() === '') {
			return
		}
		setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
		setNuevaTarea('')

	}
	const onELiminarTarea = (index: number) => {
		setListaTareas(tareas => tareas.filter((_, i) => i !== index))
	}
	return (
		<div>
			<h1>Listado de Tareas</h1>
			<hr />
			<div>
				<input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} placeholder="Ingrese nueva tarea" />
				<button onClick={agregarTarea}>Agregar Tarea</button>
				<ListaTareas listaTareas={listaTareas} eliminarTarea={onELiminarTarea}></ListaTareas>
			</div>
		</div>
	)
}