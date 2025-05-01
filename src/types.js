/**
 * Constants and type definitions for shapefile format
 */


export const GEOMETRY_TYPES = ['Point', 'LineString', 'Polygon'];
export const SHAPE_TYPES = {
  NULL: 0,
  POINT: 1,
  POLYLINE: 3,
  POLYGON: 5,
  MULTIPOINT: 8,
  POINTZ: 11,
  POLYLINEZ: 13,
  POLYGONZ: 15,
  MULTIPOINTZ: 18,
  POINTM: 21,
  POLYLINEM: 23,
  POLYGONM: 25,
  MULTIPOINTM: 28,
  MULTIPATCH: 31
};


export const FIELD_TYPES = {
  STRING: 'C',
  NUMBER: 'N',
  LOGICAL: 'L',
  DATE: 'D',
  FLOAT: 'F'
};

export const DEFAULT_OPTIONS = {
  filename: 'shapefile.zip',
  epsg: 4326
};