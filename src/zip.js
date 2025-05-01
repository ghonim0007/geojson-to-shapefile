/**
 * Functions for creating ZIP files with shapefile components
 */

/**
 * @param {Object} JSZipLib
 * @param {ArrayBuffer} shpBuffer 
 * @param {ArrayBuffer} shxBuffer 
 * @param {ArrayBuffer} dbfBuffer 
 * @param {string} prjContent
 * @param {string} baseName 
 * @returns {Promise<Blob>} 
 */
export async function createZipFile(JSZipLib, shpBuffer, shxBuffer, dbfBuffer, prjContent, baseName = 'output') {
  const zip = new JSZipLib();
  
  zip.file(`${baseName}.shp`, shpBuffer);
  zip.file(`${baseName}.shx`, shxBuffer);
  zip.file(`${baseName}.dbf`, dbfBuffer);
  zip.file(`${baseName}.prj`, prjContent);
  
  return await zip.generateAsync({ type: 'blob' });
}