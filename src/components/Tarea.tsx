type Tarea = {
	tarea: string
	eliminarTarea: () => void
}

export const Tarea = ({ tarea, eliminarTarea }: Tarea) => {
	return (
		<div className='task'>
			<span>{tarea}</span>
			<button onClick={eliminarTarea}>Eliminar</button>
		</div>
	)
}