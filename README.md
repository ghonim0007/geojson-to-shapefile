# GeoJSON to Shapefile Converter

A lightweight JavaScript library for converting GeoJSON to Shapefile format and downloading as a ZIP file. Works directly in the browser without requiring Node.js.

## Features

- Convert GeoJSON to Shapefile format
- Create SHP, SHX, DBF, and PRJ files
- Download as a ZIP file
- Works entirely client-side in modern browsers
- No server-side processing required
- Currently supports Point geometry (LineString and Polygon coming soon)

## Demo

Try the [live demo page](https://example.com/demo.html).

## Installation

### Via CDN

```html
<script src="https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js"></script>
<script src="https://cdn.example.com/geojson-shapefile/dist/geojson-shapefile.min.js"></script>
```

### Via npm

```bash
npm install geojson-shapefile
```

## Usage

```javascript
// Sample GeoJSON
const geojson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Point 1",
        "value": 42
      },
      "geometry": {
        "type": "Point",
        "coordinates": [30.05, 31.25]
      }
    }
  ]
};

// Convert to shapefile and download
ShapefileWriter.createShapefile(geojson, {
  filename: 'my_points.zip'
});
```

## Code Structure

* **src/download.js**: File download utilities
* **src/extent.js**: Bounding box calculations
* **src/fields.js**: DBF field generation
* **src/geojson.js**: GeoJSON processing and validation
* **src/points.js**: Point geometry writing
* **src/poly.js**: Polygon and LineString geometry writing (in development)
* **src/prj.js**: PRJ file creation
* **src/types.js**: Type definitions
* **src/write.js**: General writing functions
* **src/zip.js**: ZIP file creation
* **src/index.js**: Main library interface

## Requirements

* Browser with ES Modules support
* JSZip library (via CDN or npm)

## API

### ShapefileWriter.createShapefile(geojson, options)

Converts GeoJSON to Shapefile and downloads as a ZIP file.

**Parameters:**

- `geojson` - GeoJSON object to convert
- `options` - (Optional) Configuration object:
  - `filename` - Output ZIP filename (default: 'shapefile.zip')
  - `epsg` - EPSG code for projection (default: 4326 for WGS84)

**Returns:**

- Promise that resolves when the download starts

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

## License

MIT License

## Acknowledgements

- [JSZip](https://stuk.github.io/jszip/) for ZIP file creation
- [Shapefile Technical Description](https://www.esri.com/content/dam/esrisites/sitecore-archive/Files/Pdfs/library/whitepapers/pdfs/shapefile.pdf)