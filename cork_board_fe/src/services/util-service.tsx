export const UtilService = {
    getRandomColor: (): string => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`,
    getRandomPastelColor: (): string => {
        const r = Math.floor(Math.random() * 76 + 180);
        const g = Math.floor(Math.random() * 76 + 180);
        const b = Math.floor(Math.random() * 76 + 180);

        return `#${r.toString(16)
            .padStart(2, "0")}${g.toString(16)
            .padStart(2, "0")}${b.toString(16)
            .padStart(2, "0")}`;
    }
}