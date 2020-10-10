export const join = (first, second) => {
    const firstLength = first.length;
    const secondLength = second.length;
    let firstIndex = 0;
    let secondIndex = 0;
    let output = "";
    while (firstIndex < firstLength) {
        output += first[firstIndex++];
        if (second[secondIndex]) {
            output += second[secondIndex++];
        }
    }
    while (secondIndex < secondLength)
        output += second[secondIndex++];
    return output;
};
//# sourceMappingURL=utils.js.map