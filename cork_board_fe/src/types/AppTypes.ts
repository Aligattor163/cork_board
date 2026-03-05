export type User = {
    id: string,
    firstName: string,
    lastName: string,
    stickers: Sticker[]
}

export type Sticker = {
    id: string,
    header: string,
    content: string,
    isShared: boolean,
    owners: User[]
}