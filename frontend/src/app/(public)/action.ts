"use server"

import User from "@/models/user.model";


export const InsertUser = async (name: string) => {
    try {
        const doc = new User({ name })
        const newUser = await doc.save()
        console.log('User createdat', newUser);
    } catch (error) {
        console.log('Error', error);
    }
}