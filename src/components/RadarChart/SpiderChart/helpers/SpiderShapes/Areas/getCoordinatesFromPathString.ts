export const getCoordinatesFromPathString = (pathString: string) => {
    // extract commands from string
    const commands = pathString.split(/(?=[LMC])/);

    const pathPointsArray = commands.map((command: string) => {
        return command
            .slice(1, command.length)
            .split(',')
            .map((x) => Number(x));
    });

    return pathPointsArray;
};
