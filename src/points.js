/**
 * Functions for handling Point geometry in shapefiles
 */

import { calculateBounds } from './extent.js';

export function createPointSHP(geojson) {
  const featureCount = geojson.features.length;
  const bufferSize = 100 + (featureCount * 28);
  const buffer = new ArrayBuffer(bufferSize);
  const view = new DataView(buffer);

  view.setInt32(0, 9994, false);
  view.setInt32(24, bufferSize / 2, false);
  view.setInt32(28, 1000, true);
  view.setInt32(32, 1, true);

  const bounds = calculateBounds(geojson);
  view.setFloat64(36, bounds.xmin, true);
  view.setFloat64(44, bounds.ymin, true);
  view.setFloat64(52, bounds.xmax, true);
  view.setFloat64(60, bounds.ymax, true);

  let offset = 100;
  geojson.features.forEach((feature, index) => {
    view.setInt32(offset, index + 1, false);
    view.setInt32(offset + 4, 10, false);
    view.setInt32(offset + 8, 1, true);

    const [x, y] = feature.geometry.coordinates;
    view.setFloat64(offset + 12, x, true);
    view.setFloat64(offset + 20, y, true);

    offset += 28;
  });

  return buffer;
}

/**
 * @param {Object} geojson 
 * @returns {ArrayBuffer} SHX file buffer
 */

export function createPointSHX(geojson) {
  const featureCount = geojson.features.length;
  const bufferSize = 100 + (featureCount * 8);
  const buffer = new ArrayBuffer(bufferSize);
  const view = new DataView(buffer);

  view.setInt32(0, 9994, false);
  view.setInt32(24, bufferSize / 2, false);
  view.setInt32(28, 1000, true);
  view.setInt32(32, 1, true);

  const bounds = calculateBounds(geojson);
  view.setFloat64(36, bounds.xmin, true);
  view.setFloat64(44, bounds.ymin, true);
  view.setFloat64(52, bounds.xmax, true);
  view.setFloat64(60, bounds.ymax, true);

  let offset = 100;
  let shpOffset = 100;

  geojson.features.forEach(() => {
    view.setInt32(offset, shpOffset / 2, false);
    view.setInt32(offset + 4, 10, false);
    offset += 8;
    shpOffset += 28;
  });

  return buffer;
}
