/**
 * Functions for calculating geographic bounds/extents
 */

/**
 * @param {Object} geojson 
 * @returns {Object} 
 */
export function calculateBounds(geojson) {
    let xmin = Infinity, ymin = Infinity, xmax = -Infinity, ymax = -Infinity;
    
    geojson.features.forEach((feature) => {
      const [x, y] = feature.geometry.coordinates;
      xmin = Math.min(xmin, x);
      ymin = Math.min(ymin, y);
      xmax = Math.max(xmax, x);
      ymax = Math.max(ymax, y);
    });
    
    return { xmin, ymin, xmax, ymax };
  }