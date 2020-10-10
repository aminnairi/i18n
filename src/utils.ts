export const join = (first: Readonly<string[]>, second: Readonly<string[]>): string => {
    const firstLength: Readonly<number> = first.length;
    const secondLength: Readonly<number> = second.length;

    let firstIndex: number = 0;
    let secondIndex: number = 0;
    let output: string = "";

    while (firstIndex < firstLength) {
        output += first[firstIndex++];

        if (second[secondIndex]) {
            output += second[secondIndex++];
        }
    }

    while (secondIndex < secondLength) output += second[secondIndex++];

    return output;
};
