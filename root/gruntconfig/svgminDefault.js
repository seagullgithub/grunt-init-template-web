'use strict';
var grunt = require('grunt')

module.exports = {
  
  options: {
    plugins: [
      // {cleanupAttrs: xxx }, //cleanup attributes from newlines, trailing, and repeating spaces
      // {inlineStyles: xxx }, //move and merge styles from <style> elements to element style attributes
      // {removeDoctype: xxx }, //remove doctype declaration
      // {removeXMLProcInst: xxx }, //remove XML processing instructions
      // {removeComments: xxx }, //remove comments
      // {removeMetadata: xxx }, //remove <metadata>
      // {removeTitle: xxx }, //remove <title>
      // {removeDesc: xxx }, //remove <desc>
      // {removeUselessDefs: xxx }, //remove elements of <defs> without id
      // {removeXMLNS: xxx }, //removes xmlns attribute (for inline svg, disabled by default)
      // {removeEditorsNSData: xxx }, //remove editors namespaces, elements, and attributes
      // {removeEmptyAttrs: xxx }, //remove empty attributes
      // {removeHiddenElems: xxx }, //remove hidden elements
      // {removeEmptyText: xxx }, //remove empty Text elements
      // {removeEmptyContainers: xxx }, //remove empty Container elements
      // {removeViewBox: xxx }, //remove viewBox attribute when possible
      // {cleanupEnableBackground: xxx }, //remove or cleanup enable-background attribute when possible
      // {minifyStyles: xxx }, //minify <style> elements content with CSSO
      // {convertStyleToAttrs: xxx }, //convert styles into attributes
      // {convertColors: xxx }, //convert colors (from rgb() to #rrggbb, from #rrggbb to #rgb)
      // {convertPathData: xxx }, //convert Path data to relative or absolute (whichever is shorter), convert one segment to another, trim useless delimiters, smart rounding, and much more
      // {convertTransform: xxx }, //collapse multiple transforms into one, convert matrices to the short aliases, and much more
      // {removeUnknownsAndDefaults: xxx }, //remove unknown elements content and attributes, remove attrs with default values
      // {removeNonInheritableGroupAttrs: xxx }, //remove non-inheritable group's "presentation" attributes
      // {removeUselessStrokeAndFill: xxx }, //remove useless stroke and fill attrs
      // {removeUnusedNS: xxx }, //remove unused namespaces declaration
      // {prefixIds: xxx }, //prefix IDs and classes with the SVG filename or an arbitrary string
      // {cleanupIDs: xxx }, //remove unused and minify used IDs
      // {cleanupNumericValues: xxx }, //round numeric values to the fixed precision, remove default px units
      // {cleanupListOfValues: xxx }, //round numeric values in attributes that take a list of numbers (like viewBox or enable-background)
      // {moveElemsAttrsToGroup: xxx }, //move elements' attributes to their enclosing group
      // {moveGroupAttrsToElems: xxx }, //move some group attributes to the contained elements
      // {collapseGroups: xxx }, //collapse useless groups
      // {removeRasterImages: xxx }, //remove raster images (disabled by default)
      // {mergePaths: xxx }, //merge multiple Paths into one
      // {convertShapeToPath: xxx }, //convert some basic shapes to <path>
      // {sortAttrs: xxx }, //sort element attributes for epic readability (disabled by default)
      // {removeDimensions: xxx }, //remove width/height attributes if viewBox is present (opposite to removeViewBox, disable it first) (disabled by default)
      // {removeAttrs: xxx }, //remove attributes by pattern (disabled by default)
      // {removeAttributesBySelector: xxx }, //removes attributes of elements that match a css selector (disabled by default)
      // {removeElementsByAttr: xxx }, //remove arbitrary elements by ID or className (disabled by default)
      // {addClassesToSVGElement: xxx }, //add classnames to an outer <svg> element (disabled by default)
      // {addAttributesToSVGElement: xxx }, //adds attributes to an outer <svg> element (disabled by default)
      // {removeOffCanvasPaths: xxx }, //removes elements that are drawn outside of the viewbox (disabled by default)
      // {removeStyleElement: xxx }, //remove <style> elements (disabled by default)
      // {removeScriptElement: xxx }, //remove <script> elements (disabled by default)
      // {reusePaths: xxx } //Find duplicated elements and replace them with links (disabled by default)
    ]
  },
  dist: {
    files: {
      'src/assets/svgo/test1.svgo.svg': 'src/assets/svg/test1.svg'
    }
  }


}
