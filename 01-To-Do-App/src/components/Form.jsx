import { useEffect, useState } from "react";

export function Form({ id, cancel, save , hide , isupdated, updated }) {

    return (
        <div id="container-formulario" className={`bg-neutral-500 pl-10 pr-10 pt-4 fixed justify-center items-center w-auto h-96 rounded-3xl top-1/2 left-1/2 -translate-1/2 text-white z-50 ${hide}`}>
            <form id={`${id}`} className=" flex flex-col space-y-4 z-20 ">
                <label htmlFor="task" className="text-lg font-bold">Task</label>
                <input id="task" type="text" name="task" className="pl-2 w-80 h-10 border-[1px] border-[#555] " placeholder="Input Task" />
                <label htmlFor="description" className="text-lg font-bold">Description</label>
                <textarea id="description" name="description" className="resize-none pl-2 w-80 h-20 border-[1px] border-[#555]" placeholder="Input Description" />
                <div className="flex flex-row justify-center space-x-12">
                    <button type="button" className="bg-red-500 text-white p-2 rounded-lg" onClick={cancel}>Cancel</button>
                    <button type="button" className="bg-blue-500 text-white p-2 rounded-lg" onClick={
                        isupdated ? updated : save
                    }>{`${isupdated ? 'Actualizar': 'Guardar'}`}</button>
                </div>
            </form>
        </div>
    )
}