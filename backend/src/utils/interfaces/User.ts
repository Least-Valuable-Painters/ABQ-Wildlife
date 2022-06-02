export interface partialUser {
    userId: string,
    userName: string,
    userEmail: string,
    userHash: string,
    userIsAdmin: boolean
}

export interface User {
    userId: string|null,
    userName: string,
    userEmail: string,
    userHash: string,
    userIsAdmin: boolean,
    userActivationToken: string|null
}
