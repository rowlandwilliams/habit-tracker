import { layerColors } from './Colors/layerColors';
import { getLayerCoordinatesFromChartData } from './Coordinates/getLayerCoordinatesFromChartData';

export const plotSpiderShapes = (
    svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>,
    spiderChartData: {
        [key: string]: number;
    }[],
) => {
    // beginning of spider shape plotting
    // define line plotting function
    const line = d3
        .line<number[]>()
        .x((d: number[]) => d[0])
        .y((d: number[]) => d[1]);

    // convert raw scores data to coordinates that can be consumed by the line function to plot shapes
    const layerCoordinates = getLayerCoordinatesFromChartData(spiderChartData);

    // add clippath based on the first layer plotted (for overlap polygon)
    const clipPath = svg.append('clipPath').attr('id', 'suh');
    clipPath.append('path').datum(layerCoordinates[0]).attr('d', line);

    // plot the two spider chart layers
    layerCoordinates.forEach((layerData, i) => {
        svg.append('path')
            .datum(layerData)
            .attr('d', line)
            .attr('fill', layerColors[i])
            .attr('stroke-opacity', 1)
            .attr('opacity', 0.9);
    });

    // add additional top layer that is clipped using the bottom layer (overlap)
    svg.append('path')
        .datum(layerCoordinates[1])
        .attr('d', line)
        .attr('class', 'middle')
        .attr('fill', layerColors[2])
        .attr('stroke-opacity', 1)
        .attr('opacity', 1)
        .attr('clip-path', 'url(#suh)');
};
