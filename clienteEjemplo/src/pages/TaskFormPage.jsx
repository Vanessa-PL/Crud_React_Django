import { set, useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/Tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data)
    } else {
      await createTask(data);
    }
    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const res = await getTask(params.id);
        setValue('title', res.data.title)
        setValue('description', res.data.description)
      }
    }
    loadTask();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          {...register("title", { required: true })}
        />
        {errors.title && <span>ESTE CAMPO ES REQUERIDO</span>}
        <textarea
          rows="3"
          placeholder="Descripcion"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>ESTE CAMPO ES REQUERIDO</span>}
        <button>Guardar</button>
      </form>

      {params.id && (
        <button
          onClick={async () => {
            const aceptar = window.confirm("Estas seguro?");
            if (aceptar) {
              await deleteTask(params.id);
              navigate("/tasks");
            }
          }}
        >
          Eliminar
        </button>
      )}
    </div>
  );
}
