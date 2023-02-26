export const features = ['A', 'B', 'C', 'D', 'E', 'F'];

export const generateSpiderChartData = (nPlots: number) => {
    const data = [];
    // generate the data

    for (let i = 0; i < nPlots; i += 1) {
        const point: { [key: string]: number } = {};
        for (let j = 0; j < features.length; j += 1) {
            point[features[j]] = Math.random() * 10;
        }
        data.push(point);
    }

    return data;
};
