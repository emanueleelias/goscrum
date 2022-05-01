import "./Task.styles.css";
import * as Yup from "yup";
import { useFormik } from "formik";

export const TaskForm = () => {

    const initialValues = {
        title: "",
        status: "",
        priority: "",
        description: "",
    }


    const required = "* Campo requerido";
    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .min(6, "La cantidad de caracteres debe ser como minimo de 6")
            .required(required),
        status: Yup.string()
            .required(required),
        priority: Yup.string()
            .required(required),
    })

    const onSubmit = (e) => {
        e.preventDefault();

    }

    const formik = useFormik({ initialValues, validationSchema, onSubmit });
    const { handleChange, handleSubmit, errors, touched, handleBlur } = formik;

    return (
        <section className="task-form">
            <h2>Crear tarea</h2>
            <p>Creat tus tareas</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <input 
                            name="title" 
                            placeholder="Titulo" 
                            onBlur={handleBlur}
                            onChange={handleChange} 
                            type="text"
                            className={errors.title ? "error" : ""} 
                        />
                        {errors.title && touched.title && (<span className="error-message">{errors.title}</span>)}
                    </div>
                    <div>
                        <select name="status" onChange={handleChange} onBlur={handleBlur} className={errors.status ? "error" : ""}>
                            <option value="">Seleccionar un estado</option>
                            <option value="new">Nuevo</option>
                            <option value="inProcess">En proceso</option>
                            <option value="finished">Terminada</option>
                        </select>
                        {errors.status && touched.status && (<span className="error-message">{errors.status}</span>)}
                    </div>
                    <div>
                        <select name="priority" onChange={handleChange} onBlur={handleBlur} className={errors.priority ? "error" : ""}>
                            <option value="">Seleccionar una prioridad</option>
                            <option value="low">Baja</option>
                            <option value="medium">Media</option>
                            <option value="high">Alta</option>
                        </select>
                        {errors.priority && touched.priority && (<span className="error-message">{errors.priority}</span>)}
                    </div>
                </div>
                <div>
                    <textarea name="description" placeholder="Descripción" onChange={handleChange}></textarea>
                </div>
                <button type="submit">Crear</button>
            </form>
        </section>
    )
}