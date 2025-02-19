"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from "@/services/login.service";
import { Link, Navigate } from "react-router";

import deviconGoogle from "../assets/devicon--google.svg"
import deviconFacebook from "../assets/devicon--facebook.svg"
import { useState } from "react";
import { useAuth } from "@/contexts/authContext";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    email: z.string(

    ),
    password: z.string().min(2,
        "Password must be at least 6 characters long."
    ),

    password2: z.string().min(2,
        "Password must be at least 6 characters long."
    ),
})




function Register() {

    const { isAuthenticated } = useAuth();
    const [isError, setIsError] = useState('');

    //Here we are using react-hook-form to handle the form state
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            password2: "",
        },
    });

    const onChange = (e: any) => {

        const { name, value } = e.target;

        if ( name === 'password2' && value !== form.getValues('password')) {
            setIsError('Passwords do not match');
            return;
        }
        else{
            setIsError('');
        }

        
    }

    const onSubmit = form.handleSubmit(async (data) => {
        console.log(data);
        if (data.password !== data.password2) {
            setIsError('Passwords do not match');
            return;
        }
        try {
            await doCreateUserWithEmailAndPassword(data.email, data.password);
        } catch (error) {
            alert(error);
        }
    });

    const withGoogle = async () => {
        console.log("Google");
        try {
            await doSignInWithGoogle();
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            {
                isAuthenticated ?
                    <Navigate to="/dashboard" /> :
                    null
            }
            < main className="flex items-center justify-center h-screen bg-gradient-to-r from-slate-700 to-slate-700 " >
                <div onChange={onChange} className="flex flex-col items-center justify-center gap-3 w-96  h-auto rounded-lg shadow-lg py-10 ">
                    <h1 className="text-2xl font-semibold text-white pb-2">Register</h1>
                    <Form {...form}>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full px-10  ">
                                    <FormLabel className="text-white">Email</FormLabel>
                                    <FormControl>
                                        <Input className="bg-transparent text-white focus-visible:ring-0 focus-visible:ring-transparent " type="email" placeholder="example@gmail.com" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-white" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="w-full px-10">
                                    <FormLabel className="text-white"> Password</FormLabel>
                                    <FormControl>
                                        <Input className="bg-transparent text-white focus-visible:ring-0 focus-visible:ring-transparent" type="password" placeholder={'*'.repeat(8)} {...field} />
                                    </FormControl>
                                    <FormMessage className="text-white" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password2"
                            render={({ field }) => (
                                <FormItem className="w-full px-10">
                                    <FormLabel className="text-white">Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input className="bg-transparent text-white focus-visible:ring-0 focus-visible:ring-transparent" type="password" placeholder={'*'.repeat(8)} {...field} />
                                    </FormControl>
                                    <FormMessage >
                                        {isError}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />

                        <Button
                            onClick={onSubmit}
                            type="submit"
                            className="bg-transparent border-2 mt-7 text-white py-2 rounded-lg w-[304px] px-10
                            hover:bg-black hover:border-black
                            "
                        >
                            Sing Up
                        </Button>

                        <div className="flex justify-center w-full px-10 text-white space-x-2">
                            <p>
                                Do you have an account?
                            </p>
                            <Link to="/login" className="text-white underline">Sign In</Link>
                        </div>

                    </Form>

                    <div className="flex flex-col items-center justify-center gap-4 pt-10">
                        <Button onClick={withGoogle} className="w-60 bg-transparent flex rounded-xl p-2 border space-x-4 hover:bg-black hover:border-black" >
                            <img src={deviconGoogle} alt="Google" className="w-6 h-6" />
                            <p className="text-white">Iniciar sesion con Google</p>
                        </Button>
                        <Button onClick={withGoogle} className="w-60 bg-transparent flex rounded-xl p-2 border space-x-4 hover:bg-black hover:border-black" >
                            <img src={deviconFacebook} alt="Facebook" className="w-6 h-6" />
                            <p className="text-white">Iniciar sesion con Facebook</p>
                        </Button>
                    </div>

                </div>
            </main >

        </>
    );
}

export default Register;



/*
flex flex-col items-center
justify-evenly w-96 h-96
bg-linear-gradient-to-r 
from-blue-400 to-green-400
rounded-lg shadow-lg p-8 
*/