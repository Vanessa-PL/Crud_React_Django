import axios from 'axios'

const tasksApi = axios.create({
    baseURL : "http://localhost:8000/tasks/api/v1/tasks/"
})

//Read
export const getAllTask = () => tasksApi.get("/");

//Read task
export const getTask = (id) => tasksApi.get(`/${id}/`) 

//Create
export const createTask = (task) => tasksApi.post("/", task)

//Delete
export const deleteTask = (id) => tasksApi.delete(`/${id}/`)

//Update
export const updateTask = (id, task) => tasksApi.put(`/${id}/`,task)