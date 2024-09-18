import { useEffect } from "react"
import { getAllTask } from "../api/Tasks.api"

export function TasksList() {

    useEffect(() => {
        async function loadTasks() {
            const response = await getAllTask()
            console.log(response)
        }
        loadTasks()
    }, [])

  return (
    <div>TasksList</div>

  )
}
