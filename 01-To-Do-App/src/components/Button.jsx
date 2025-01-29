// import React from 'react';
export function Button({ icon, onClick }) {
    return (
        <button onClick={onClick} type="submit" className="z-20 shadow-2xl bg-blue-500 px-4 py-2 rounded-md">
            <span>{icon}</span>
        </button>
    )
}