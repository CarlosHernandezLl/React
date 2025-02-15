"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})


function Login() {

    //Here we are using react-hook-form to handle the form state
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    //Here we are defining the submit function
    const onSubmit = form.handleSubmit((data) => {
        console.log(data);
    });

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-evenly w-96 h-96 bg-linear-gradient-to-r from-blue-400 to-green-400 rounded-lg shadow-lg p-8">
                <Form {...form}>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>


                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your private password.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>


                        )}
                    />
                </Form>

            </div>
        </div>
    );
}

export default Login;



/*
flex flex-col items-center
justify-evenly w-96 h-96
bg-linear-gradient-to-r 
from-blue-400 to-green-400
rounded-lg shadow-lg p-8 
*/