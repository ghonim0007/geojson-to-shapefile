/**
 * Library to convert GeoJSON to Shapefile and download as a ZIP file
 * Works in the browser without requiring Node.js
 * Version: 1.0.0
 * License: MIT
 */

import { validateGeoJSON, getGeometryType } from './geojson.js';
import { createPointSHP, createPointSHX } from './points.js';
import { createDBF } from './write.js';
import { createPRJ } from './prj.js';
import { createZipFile } from './zip.js';
import { downloadZip } from './download.js';
import { DEFAULT_OPTIONS } from './types.js';

let JSZip;
if (typeof window !== 'undefined') {
  JSZip = window.JSZip;
  if (!JSZip) {
    console.error('JSZip library is required. Add <script src="https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js">');
  }
}

export const ShapefileWriter = {
  /**
   * @param {Object} geojson 
   * @param {Object} options 
   * @returns {Promise<void>}
   */
  async createShapefile(geojson, options = {}) {
    if (!JSZip) {
      throw new Error('JSZip library is required. Make sure it is loaded before using this library.');
    }
    
    const opts = { ...DEFAULT_OPTIONS, ...options };
    
    validateGeoJSON(geojson);
    
    const geometryType = getGeometryType(geojson);
    
    let shpBuffer, shxBuffer;
    if (geometryType === 'Point') {
      shpBuffer = createPointSHP(geojson);
      shxBuffer = createPointSHX(geojson);
    } else {
      throw new Error(`Currently only Point geometries are supported`);
    }
    
    const dbfBuffer = createDBF(geojson);
    const prjContent = createPRJ(opts.epsg);
    const baseName = opts.filename.replace(/\.zip$/, '');
    const content = await createZipFile(
      JSZip,
      shpBuffer,
      shxBuffer,
      dbfBuffer,
      prjContent,
      baseName
    );
    
    downloadZip(content, opts.filename);
  }
};

if (typeof window !== 'undefined') {
  window.ShapefileWriter = ShapefileWriter;
}

export default ShapefileWriter;