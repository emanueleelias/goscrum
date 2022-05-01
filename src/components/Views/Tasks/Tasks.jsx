import { useResize } from "../../../hooks/useResize";
import { Card } from "../../Card/Card";
import { Header } from "../../Header/Header";
import { TaskForm } from "../../TaskForm/TaskForm";
import "./Tasks.styles.css";


const cardsData = [
    {
        id: 1,
        title: "algun tutilo",
        creator: "yo",
        description: "description 1",
        type: "new",
        priority: "high",
    },
    {
        id: 2,
        title: "algun tutilo",
        creator: "yo",
        description: "description 1",
        type: "new",
        priority: "high",
    },
    {
        id: 3,
        title: "algun tutilo",
        creator: "yo",
        description: "description 1",
        type: "new",
        priority: "high",
    },
]


export const Tasks = () => {

  const { isPhone } = useResize();

    const limitString = str => {
        if (str.length > 270) {
            return { String: str.slice(0, 267).concat("..."), addButton: true }
        }
        return { String: str, addButton: false }
    }

    const renderAllCards = () => {
        return cardsData.map(data=> <Card key={data.id} data={data} />);
    }

    return (
        <>
            <Header />
            <main id="tasks">

                <TaskForm />

                <section className="wrapper_list">

                    <div className="list_header">
                        <h2>Mis tareas</h2>
                    </div>

                    {isPhone ? (
                        <div className="list phone">
                            {renderAllCards()}
                        </div>
                    ) : (

                        <div className="list_group">
                            <div className="list">
                                <h4>Nuevas</h4>
                                <div className="card">
                                    <div className="close">x</div>
                                    <h3>Tarea 1 desk</h3>
                                    <h6>24/04/2022 12:00 hs.</h6>
                                    <h5>Emanuele Elias</h5>
                                    <button type="button">Nueva</button>
                                    <button type="button">Alta</button>
                                    <p>{limitString(`Texto largo`).String}</p>
                                </div>
                            </div>

                            <div className="list">
                                <h4>En proceso</h4>
                                <div className="card">
                                    <div className="close">x</div>
                                    <h3>Tarea 1 desk</h3>
                                    <h6>24/04/2022 12:00 hs.</h6>
                                    <h5>Emanuele Elias</h5>
                                    <button type="button">Nueva</button>
                                    <button type="button">Alta</button>
                                    <p>{limitString(`Texto largo`).String}</p>
                                </div>
                            </div>

                            <div className="list">
                                <h4>Finalizadas</h4>
                                <div className="card">
                                    <div className="close">x</div>
                                    <h3>Tarea 1 desk</h3>
                                    <h6>24/04/2022 12:00 hs.</h6>
                                    <h5>Emanuele Elias</h5>
                                    <button type="button">Nueva</button>
                                    <button type="button">Alta</button>
                                    <p>{limitString(`Texto largo`).String}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </main>
        </>
    )
}