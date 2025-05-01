/**
 * Functions for validating and processing GeoJSON
 */

import { GEOMETRY_TYPES } from './types.js';

/**
 * Get the geometry type of the first feature in a GeoJSON object
 * @param {Object} geojson - GeoJSON object
 * @returns {string} Geometry type name
 */
export function getGeometryType(geojson) {
  const feature = geojson.features[0];
  return feature.geometry.type;
}

/**
 * Validate GeoJSON structure and supported geometry types
 * @param {Object} geojson - GeoJSON object to validate
 * @returns {boolean} True if valid
 * @throws {Error} If GeoJSON is invalid or has unsupported geometry
 */
export function validateGeoJSON(geojson) {
  if (!geojson || !geojson.type || !geojson.features) {
    throw new Error('Invalid GeoJSON');
  }

  const geometryType = getGeometryType(geojson);
  if (!GEOMETRY_TYPES.includes(geometryType)) {
    throw new Error(`Unsupported geometry type: ${geometryType}`);
  }
  
  return true;
}