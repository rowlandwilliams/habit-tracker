export const convertArrayType = (pathArray: number[][]) => {
    const final = [] as [number, number][];

    pathArray.forEach((x) => {
        const trueArray: [number, number] = [x[0], x[1]];
        final.push(trueArray);
    });

    return final;
};
