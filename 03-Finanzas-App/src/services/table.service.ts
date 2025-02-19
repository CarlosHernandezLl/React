// import { ExpensesData } from "@/utils/constants/data";
// const fs = require('fs');
import { db } from "@/firebase/config";
import { collection, addDoc, getDocs } from "firebase/firestore";


const appendExpense = async (expense: any) => {
    try {
        const docRef = await addDoc(collection(db, "expenses"), {
            ...expense
        });
        console.log('Expense added', docRef.id);
    }
    catch (e) {
        console.error('Error adding expense', e);
    }
}

const appendIncome = async (income: any) => {
    try {
        const docRef = await addDoc(collection(db, "incomes"), {
            ...income
        });
        console.log('Income added', docRef.id);
    }
    catch (e) {
        console.error('Error adding income', e);
    }
}

const getExpenses = async (userId: any) => {
    let arrayExpenses: any = [];
    const querySnapshot = await getDocs(collection(db, "expenses"));
    querySnapshot.docs.map((doc: any) => {
        if (doc.data().userId === userId) {
            arrayExpenses.push(doc.data());
        }
    })

    return arrayExpenses;
}

const getIncomes = async (userId: any) => {
    let arrayIncomes: any = [];
    const querySnapshot = await getDocs(collection(db, "incomes"));
    querySnapshot.docs.map((doc: any) => {
        if (doc.data().userId === userId) {
            // console.log(doc.data());
            arrayIncomes.push(doc.data());
        }
    })

    return arrayIncomes;
}



export {
    appendExpense,
    appendIncome,
    getExpenses,
    getIncomes
}