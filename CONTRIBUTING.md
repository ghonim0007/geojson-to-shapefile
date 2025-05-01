# Contributing to GeoJSON to Shapefile Converter

Thank you for contributing to **GeoJSON to Shapefile Converter**! This JavaScript library converts GeoJSON to Shapefile format in the browser. We welcome bug fixes, new features, documentation improvements, and examples.

---

## How to Contribute

### 1. Fork the Repository

Fork the official repository:

> [https://github.com/ghonim0007/geojson-to-shapefile](https://github.com/ghonim0007/geojson-to-shapefile)

### 2. Clone and Branch

```bash
git clone https://github.com/<your-username>/geojson-to-shapefile.git
cd geojson-to-shapefile
git checkout -b feature/your-feature
```

### 3. Make Changes

* Edit files in the `src/` folder (e.g., `points.js` for Point geometry).
* Add or update demo files in `examples/` if needed.
* Follow the coding style:

  * Use **2-space indentation**
  * Write **JSDoc comments**

### 4. Test Changes

* Test your code in the browser using `examples/demo.html`.
* Open the downloaded Shapefile in **QGIS** to verify results.

### 5. Commit and Push

```bash
git commit -m "Fix DBF field handling"
git push origin feature/your-feature
```

### 6. Submit a Pull Request

* Open a PR on GitHub.
* Provide a **clear description** of what was changed and how it was tested.

---

## Guidelines

### Code Style

* Use ES Modules (`export` / `import`)
* Indentation: **2 spaces**
* Comment using JSDoc format:

```js
/**
 * Function description
 * @param {type} param - Description
 */
export function myFunction(param) {
  // ...
}
```

### Testing

* Test in **Chrome** and **Firefox**.
* Validate exported Shapefiles in **QGIS**.

### Scope

* Keep Pull Requests focused (e.g., **one feature or fix per PR**).

### Documentation

* If your changes affect functionality, **update the README.md**.
* Add examples to the `examples/` folder if relevant.

---

## Contribution Ideas

* Fix bugs in `src/fields.js` or `src/geojson.js`.
* Add **LineString** and **Polygon** support in `src/poly.js`.
* Improve documentation (`README.md`) or add new demos.
* Optimize performance for **large GeoJSON datasets**.

---

## Need Help?

* Check [GitHub Issues](../../issues) for open tasks.
* Open a new Issue if you have **questions or suggestions**.

---

## License

Contributions are licensed under the [MIT License](LICENSE).
