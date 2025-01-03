import { Tarea } from "./Tarea"

type ListaTareas = {
	listaTareas: string[]
	eliminarTarea: (index: number) => void
}

export const ListaTareas = ({ listaTareas, eliminarTarea }: ListaTareas) => {
	return (
		<div className="taskList">
			{listaTareas.map((tarea, index) => (
				<Tarea key={index} tarea={tarea} eliminarTarea={() => eliminarTarea(index)}></Tarea>
			)
			)}
		</div>
	)
}