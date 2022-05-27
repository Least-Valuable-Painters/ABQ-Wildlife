export interface partialUser {
    userId: string,
    userUserName: string,
    userEmail: string,
    userHash: string,
    userIsAdmin: boolean
}

export interface User {
    userId: string|null,
    userActivationToken: string|null,
    userEmail: string,
    userHash: string,
    userIsAdmin: boolean,
    userName: string,

}
