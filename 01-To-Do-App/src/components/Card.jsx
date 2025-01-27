import { MdiTrash, TablerEdit } from "../icon.jsx";
import { Button } from "./Button";
import { useState } from "react";
import { Form } from "./Form.jsx";

export const getCard = (e) => {
    return e.target.parentNode.parentNode.id;

}

export function Card({ idCard, name, description, updatedCard, deleteCard }) {

    const [checked, setChecked] = useState(false);

    return (

        <>
            <div id={`${idCard}`} className={`flex flex-row w-auto h-auto
         p-5 rounded-lg shadow-md items-center ${checked ? 'bg-blue-300 blur-sm pointer-events-none' : 'bg-white'}`} >

                <input className="w-3.5 h-3.5 static " type="checkbox" onClick={() => {
                    setChecked(!checked);
                }} />
                <div className="flex flex-col ml-4 max-w-64 min-w-64 max-h-24">
                    <h2 className="text-xl font-bold" >{name}</h2>
                    <p className="text-sm text-pretty mt-2 overflow-x-hidden">{description} </p>
                </div>
                <div className="flex flex-row ml-auto">
                    <button onClick={updatedCard} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        <span>{<TablerEdit />}</span>
                    </button>
                    <span className="w-2"></span>
                    <button onClick={deleteCard} className="bg-red-500 text-white px-4 py-2 rounded-md">
                        <span>{<MdiTrash />}</span>
                    </button>
                    {/* <Button icon={<TablerEdit />} onClick={updatedCard} /> */}
                    {/* <Button icon={<MdiTrash />} onClick={deleteCard} /> */}
                </div>
            </div>

        </>

    )
}