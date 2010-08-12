Require CSS
===========

An experiment with requiring CSS files from Javascript, and getting a callback when they are loaded.

Currently implemented by passing a method to poll as a "test" to see if the file is loaded.  The biggest problem with this will be loading css that applies to dynamically generated elements (which may not have been created yet).