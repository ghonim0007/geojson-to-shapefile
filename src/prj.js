/**
 * Functions for creating projection files (.prj)
 */

/**
 *WGS84 
 * @returns {string} 
 */
export function createWGS84PRJ() {
    return `GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563]],PRIMEM["Greenwich",0],UNIT["degree",0.0174532925199433]]`;
  }
  
  /**
   * @param {number} epsg 
   * @returns {string} 
   */
  export function createPRJ(epsg = 4326) {
    switch (epsg) {
      case 4326:
        return createWGS84PRJ();
      default:
        throw new Error(`Unsupported EPSG code: ${epsg}`);
    }
  }