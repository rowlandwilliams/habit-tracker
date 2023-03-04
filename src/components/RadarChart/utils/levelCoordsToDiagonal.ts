/**
 * This function uses the coordinates generated in getLevelCoords.ts to create paired coordinates required to plot the paths of each diagonal at each level of each hexagon
 *
 * Visual example using the Spider chart ->
 * - Look at level 10 (the outer hexagon)
 * - getLevelCoords returns the coordinates of each vertice of the outer hexagon.
 * - The coordinate pairs of the diagonal lines are then determined here by progressing around the hexagon in pairs in a clockwise manner
 * - For example the coordinate for Biodiveristy is paired with that of Climate Change, Climate change is then paired with gender equality
 * and so on until all 6 (one for each diagonal at each level) coordinate pairs are generated
 *
 * @param {number} coords - an array of coordinate arrays corresponding to positions of each vertice of a hexagon
 
 */

export const levelCoordsToDiagonal = (coords: number[][]) => {
  const diagonals = [];
  for (let i = 0; i < coords.length; i += 1) {
    const x1 = coords[i][0];
    const x2 = i === coords.length - 1 ? coords[0][0] : coords[i + 1][0];
    const y1 = coords[i][1];
    const y2 = i === coords.length - 1 ? coords[0][1] : coords[i + 1][1];

    diagonals.push({ x1, x2, y1, y2 });
  }

  return diagonals;
};
