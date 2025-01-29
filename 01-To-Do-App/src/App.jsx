import { useState, useEffect } from "react"
import { Card, getCard } from "./components/Card"
import { Button } from "./components/Button"
import { MaterialSymbolsAdd } from "./icon"
import { Form } from "./components/Form"
import data from "./data.json"


export function App() {

    const [tasks, setTasks] = useState(data.tasks);
    const [visibleForm, setVisibleForm] = useState("hidden");
    const [blur, setBlur] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);
    const [idpersisted, setIdpersisted] = useState(null);


    const add = () => {
        setIsUpdate(false)
        setVisibleForm("")
        setBlur("blur-sm")
        document.getElementById("task").value = "";
        document.getElementById("description").value = "";
    }

    const close = () => {
        setVisibleForm("hidden")
        setBlur("")
    }

    const showFormUpdate = (e) => {
        setIsUpdate(true);
        setVisibleForm("");
        setBlur("blur-sm")
        tasks.map((item) => {
            if (item.id == getCard(e)) {
                setIdpersisted(item.id);
                document.getElementById("task").value = item.name;
                document.getElementById("description").value = item.description;
            }
        })

    }

    const update = () => {

        tasks.map((item) => {
            if (item.id == idpersisted) {
                item.name = document.getElementById("task").value;
                item.description = document.getElementById("description").value;
            }
        })

        document.getElementById("task").value = "";
        document.getElementById("description").value = "";
        setVisibleForm("hidden")
        setBlur("")

    }

    const deleteList = async (e) => {

        try {    
            const newData = tasks.filter((item)=> item.id != getCard(e));
            setTasks(newData);
        }
        catch (e) {
            throw new alert("Error")
        }


    }


    const save = async (e) => {
        try {
            const task = document.getElementById("task").value;
            const description = document.getElementById("description").value;

            if (task === "" || description === "") {
                throw new alert("Task and Description are required")
            }
            
            setTasks([...tasks, {
                id: tasks.length + 1,
                name: task,
                description: description
            }])

            document.getElementById("task").value = "";
            document.getElementById("description").value = "";
            setVisibleForm("hidden")
            setBlur("")

        } catch (e) {
            throw new alert("Error")
        }

    }

    return (
        <>
            <div className={`bg-radial from-sky-500 via-blue-400 to-indigo-400 to-90% min-h-screen flex flex-col justify-center items-center ${blur}`}>
                <h1 className="text-3xl text-white font-bold mt-4 mb-4">TO-DO APP</h1>
                <div className="flex flex-col space-y-4">
                    {
                        tasks.map((item, _) => {
                            return <Card key={item.id} idCard={item.id} name={item.name} description={item.description} updatedCard={showFormUpdate} deleteCard={deleteList} />
                        })
                    }
                </div>
                <div className="mt-4 w-96 h-24 relative">
                    <div className="absolute right-0">
                        <Button icon={<MaterialSymbolsAdd />} onClick={add} />
                    </div>

                </div>
            </div >
            <Form id={idpersisted} cancel={close} save={save} hide={visibleForm} isupdated={isUpdate} updated={update} />


        </>
    )
}