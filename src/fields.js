/**
 * Functions for handling shapefile attribute fields
 */

/**
 * Extract field definitions from GeoJSON properties
 * @param {Object} geojson - GeoJSON object
 * @returns {Array} Array of field definition objects
 */
export function getFields(geojson) {
    const fields = new Set();
    
    geojson.features.forEach((feature) => {
      Object.keys(feature.properties || {}).forEach((key) => {
        fields.add(key.slice(0, 10));
      });
    });
    
    return Array.from(fields).map((name) => ({
      name,
      type: 'C',
      length: 50,
    }));
  }