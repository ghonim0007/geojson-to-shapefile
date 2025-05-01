/**
 * Functions for writing DBF (dBASE) files
 */

import { getFields } from './fields.js';

/**
 *
 * @param {Object} geojson 
 * @returns {ArrayBuffer} 
 */
export function createDBF(geojson) {
  const fields = getFields(geojson);
  const recordCount = geojson.features.length;
  const fieldDescriptors = fields.length * 32;
  const recordLength = fields.reduce((sum, field) => sum + field.length, 1);
  const bufferSize = 32 + fieldDescriptors + 1 + (recordCount * recordLength);
  
  const buffer = new ArrayBuffer(bufferSize);
  const view = new DataView(buffer);
  
  view.setUint8(0, 0x03);
  const now = new Date();
  view.setUint8(1, now.getFullYear() - 1900);
  view.setUint8(2, now.getMonth() + 1);
  view.setUint8(3, now.getDate());
  view.setInt32(4, recordCount, true);
  view.setInt16(8, 32 + fieldDescriptors + 1, true);
  view.setInt16(10, recordLength, true);
  
  let offset = 32;
  fields.forEach((field) => {
    const fieldName = field.name.padEnd(11, '\0').slice(0, 11);
    for (let i = 0; i < 11; i++) {
      view.setUint8(offset + i, fieldName.charCodeAt(i) || 0);
    }
    view.setUint8(offset + 11, field.type.charCodeAt(0));
    view.setUint32(offset + 12, 0, true);
    view.setUint8(offset + 16, field.length);
    view.setUint8(offset + 17, 0);
    offset += 32;
  });
  
  view.setUint8(offset, 0x0D);
  offset += 1;
  
  geojson.features.forEach((feature) => {
    view.setUint8(offset, 0x20);
    offset += 1;
    
    fields.forEach((field) => {
      let value = String(feature.properties[field.name] || '');
      value = value.padEnd(field.length, ' ').slice(0, field.length);
      for (let i = 0; i < value.length; i++) {
        view.setUint8(offset + i, value.charCodeAt(i));
      }
      offset += field.length;
    });
  });
  
  return buffer;
}
