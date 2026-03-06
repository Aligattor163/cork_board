import {Token} from "@shared/types/AppTypes";
import {clearTimeout} from "node:timers";

let tokens: Token[] = [];
let timers = new Map<string, ReturnType<typeof setTimeout>>();

export const TokenService = {
    createToken(userID: string): Token | undefined {
        if (userID) {
            const encodedTokenValue: string = btoa(crypto.randomUUID());
            const encodedToken: Token = {userID: userID, value: encodedTokenValue};
            tokens.push(encodedToken);
            const timerID = setTimeout(() => this.deleteToken(encodedTokenValue), 120000) //token expired after 2 mins
            timers.set(encodedTokenValue, timerID)
            return encodedToken;
        }
        return undefined;
    },
    checkToken(value: string): boolean {
        return tokens.some((token) => token.value === value)
    },
    deleteToken(value: string): void {
        let timerID: ReturnType<typeof setTimeout> | undefined = timers.get(value);
        timerID && clearTimeout(timerID) && timers.delete(value);
        tokens = tokens.filter((token) => token.value !== value)
    }
}

export default TokenService;
