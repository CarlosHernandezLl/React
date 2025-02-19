import { useAuth } from "@/contexts/authContext";
import { JSX, useState } from "react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CATEGORY } from "@/utils/constants/data";
import { appendExpense, appendIncome } from "@/services/table.service";


const METHOD = [
    { value: "Credit Card", label: "Credit Card" },
    { value: "Cash", label: "Cash" },
    { value: "Debit Card", label: "Debit Card" },
    { value: "Bank Transfer", label: "Bank Transfer" },
    { value: "Paypal", label: "Paypal" },
    { value: "Others", label: "Others" }
];


export const Modal = ({ addNewExpense, addNewIncome, cancelModal, isIncome }: any): JSX.Element => {

    const { currentUser } = useAuth();

    // const [isExpense, setIsExpense] = useState(isIncome);

    let datee = new Date().toISOString().split('T')[0];

    const formatData = (date: string) => {
        let data = date.split('-');
        // console.log(date);
        // console.log(data);
        // console.log(`${data[2]}/${data[1]}/${data[0]}`);
        return `${data[2]}/${data[1]}/${data[0]}`;

    }

    const [form, setForm] = useState({
        day: datee,
        amount: 0,
        source: '',
        method: '',
        category: '',
        userId: currentUser.uid
    });

    const handleChange = (e: any) => {
        // console.log(e.target);
        const { id, value } = e.target;
        console.log(id, value);

        if (id !== '') {
            setForm({
                ...form,
                [id]: value
            })
        }
    }

    const handleMethodChange = (value: string) => {
        console.log('method', value);
        setForm({
            ...form,
            method: value
        });
    };

    const handleCategoryChange = (value: string) => {
        console.log('category', value);
        setForm({
            ...form,
            category: value
        });
    }

    const handleCancel = () => {
        // showExpense(false);
        cancelModal();

    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const { day, amount, source, method, category } = form;
        console.log(formatData(day), amount, source, method, category);
        const newForm = {
            date: formatData(day),
            amount: amount,
            source: source,
            method: method,
            category: category,
            userId: currentUser.uid
        }

        if (isIncome) {
            console.log('income', newForm)
            addNewIncome(newForm)
            appendIncome(newForm)
        } else {
            console.log('expense', newForm)
            addNewExpense(newForm)
            appendExpense(newForm)
        }

    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <Card className="w-96">
                <CardHeader>
                    <CardTitle>
                        {
                            addNewExpense ? 'Add Expense' : 'Add Income'
                        }
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onChange={handleChange} className="flex flex-col gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="day" className="space-y-2">Date</Label>
                            <Input id="day" type="date" value={form.day} />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="amount" className="space-y-2">
                                <span>Amount</span>
                            </Label>
                            <Input id="amount" type="number" min={0} />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="source" className="space-y-2">
                                <span>Source</span>
                            </Label>
                            <Input id="source" type="text" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="method" className="space-y-2">
                                <span>Method</span>
                            </Label>
                            <Select onValueChange={handleMethodChange}>
                                <SelectTrigger >
                                    <SelectValue placeholder="Select Method" />
                                </SelectTrigger>
                                <SelectContent position="popper" className="bg-white">
                                    {
                                        METHOD.map((method, index) => (
                                            <SelectItem key={index} value={method.value}>{method.label}</SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="category" className="space-y-2">
                                <span>Category</span>
                            </Label>
                            <Select onValueChange={handleCategoryChange}>
                                <SelectTrigger id="category">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent position="popper" className="bg-white">
                                    {
                                        CATEGORY.map((category, index) => (
                                            <SelectItem key={index} value={category}>{category}</SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                        </div>
                        {/* <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add Expense</button> */}
                        <CardFooter className="flex justify-between">
                            <Button onClick={handleCancel} variant="outline">Cancel</Button>
                            <Button onClick={handleSubmit}>Deploy</Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
