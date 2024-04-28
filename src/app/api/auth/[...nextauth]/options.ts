import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'



export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username", 
                    type: "text",
                    placeholder: "Your username here"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "Your password here"
                },
            },
           async authorize(credentials) {
            // this is where you need to retrieve the user from your database
            // to verify with the credentials
            // Docs: https://next-auth.js.org/providers/credentials#example
            const user = { id: "1", name: "user", password: "user" }

            if (credentials?.username === user.name && credentials.password ===
                 user.password) {
                    return user
                } else {
                    return null 
                }
            }
        })  
        
    ],
}



