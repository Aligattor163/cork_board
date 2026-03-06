export type User = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password?: string
}

export type Sticker = {
    id: string,
    header: string,
    content: string,
    isShared: boolean,
    ownerIDs: string[]
}

export type Token = {
    value: string,
    userID: string
}