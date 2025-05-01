Contributing to GeoJSON to Shapefile Converter
Thank you for contributing to GeoJSON to Shapefile Converter! This JavaScript library converts GeoJSON to Shapefile format in the browser. We welcome bug fixes, new features, documentation improvements, and examples.
How to Contribute

Fork the Repository:

Fork ghonim0007/geojson-to-shapefile.


Clone and Branch:

Clone your fork and create a new branch:git clone https://github.com/<your-username>/geojson-to-shapefile.git
git checkout -b feature/your-feature




Make Changes:

Edit files in src/ (e.g., points.js for Point geometry) or examples/ for demos.
Follow the coding style (2-space indentation, JSDoc comments).


Test Changes:

Test in a browser using examples/demo.html.
Verify Shapefiles in QGIS.


Commit and Push:

Commit with a clear message:git commit -m "Fix DBF field handling"
git push origin feature/your-feature




Submit a Pull Request:

Create a Pull Request with a description of your changes and tests.



Guidelines

Code Style: Use ES Modules, 2-space indentation, and JSDoc comments:/**
 * Function description
 * @param {type} param - Description
 */
export function myFunction(param) { ... }


Testing: Test in Chrome/Firefox and validate Shapefiles in QGIS.
Scope: Keep PRs focused (e.g., one bug fix or feature).
Documentation: Update README.md or examples if needed.

Contribution Ideas

Fix bugs in src/fields.js or src/geojson.js.
Add LineString/Polygon support in src/poly.js.
Improve README.md or add demos in examples/.
Optimize performance for large GeoJSON datasets.

Need Help?

Check Issues.
Open an Issue for questions or ideas.

License
Contributions are licensed under the MIT License.
