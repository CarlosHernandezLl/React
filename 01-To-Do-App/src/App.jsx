import { useState, useEffect } from "react"
import { Card, getCard } from "./components/Card"
import { Button } from "./components/Button"
import { MaterialSymbolsAdd } from "./icon"
import { Form } from "./components/Form"

const data2 = [

    {
        id: 10,
        name: "Pay Bills",
        description: "Pay bills before 10th of every month to avoid late fees and penalties, also to maintain a good credit score, and to avoid disconnection of services, and to avoid legal actions."

    },
    {
        id: 12,
        name: "Exercise",
        description: "Regular exercise is important for physical and mental health"
    },
    {
        id: 30,
        name: "Eat Healthy",
        description: "Eating healthy is important for physical and mental health"
    },
    {
        id: 40,
        name: "Home Work",
        description: " Do your homework before the deadline to avoid penalties and to maintain a good grade"
    },
    {
        id: 105,
        name: "Girlfriend",
        description: "Spend time with your girlfriend to maintain a healthy relationship"
    }, {
        id: 200,
        name: "Lunch",
        description: "Eat lunch before 1:00 PM"
    }, {
        id: 11,
        name: "Workout",
        description: "Workout for 30 minutes "
    },
]



export function App() {

    const [visibleForm, setVisibleForm] = useState("hidden");
    const [data, setData] = useState(data2);
    const [blur, setBlur] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);
    const [idpersisted, setIdpersisted] = useState(null);

    useEffect(() => {

        setData(data)

    }, [])


    const add = () => {
        document.getElementById("task").value = "";
        document.getElementById("description").value = "";
        setIsUpdate(false)
        setVisibleForm("")
        setBlur("blur-sm")
    }

    const close = () => {
        setVisibleForm("hidden")
        setBlur("")
    }

    const showFormUpdate = (e) => {
        setIsUpdate(true);
        setVisibleForm("");
        setBlur("blur-sm")
        data.map((item) => {
            if (item.id == getCard(e)) {
                console.log("item.id", item.id);
                setIdpersisted(item.id);
                document.getElementById("task").value = item.name;
                document.getElementById("description").value = item.description;
            }
        })

    }

    const update = () => {

        data.map((item) => {
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

    const deleteList = (e) => {
        const newData = data.filter((item) => item.id != getCard(e));
        console.log("se borro el id", getCard(e));
        setData(newData);

    }


    const save = () => {
        try {

            const id = data.length + 1;
            const task = document.getElementById("task").value;
            const description = document.getElementById("description").value;

            if (task === "" || description === "") {
                throw new alert("Task and Description are required")
            }

            const newData = {
                id: id,
                name: task,
                description: description
            }

            const newDataArray = [...data, newData];
            setData(newDataArray);
            document.getElementById("task").value = "";
            document.getElementById("description").value = "";
            setVisibleForm("hidden")
            setBlur("")

        } catch (e) {
            console.log(e)
        }

    }

    return (
        <>
            <div id='abc' className={`bg-blue-100 min-h-screen flex flex-col justify-center items-center ${blur}`}>
                <h1 className="text-3xl font-bold mb-4">TO-DO APP</h1>
                <div className="flex flex-col space-y-4">
                    {
                        data.map((item, _) => {
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