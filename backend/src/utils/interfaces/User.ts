export interface partialUser {
    userId: string,
    userUserName: string,
    userEmail: string,
    userHash: string,
    userIsAdmin: boolean
}

export interface User {
    userId: string,
    userUserName: string,
    userEmail: string,
    userHash: string,
    userIsAdmin: boolean,
    userActivationToken: string
}