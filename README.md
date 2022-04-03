Here is my submission for the Vintrace Coding Challenge.

PROGRESS

I have yet to complete the tabulated table in the Product page.

KNOWN ISSUES

Besides some inaccurate CSS styling, there are no bugs that were encountered and not fixed.

There is some inconsistencies in the code styles. You'll notice that the file "src/pages/WineSearch.js" is a JSX-style component, while "src/pages/ProductView.js" is a function component.  I was not aware for most of the implementation that many of React Routers hooks are incompatible with JSX components. I realise now that function components and hooks are linkely the preferred convention as this decouples the app's rendering logic from its other logic.

RUNNING

To install the dependencies, run "npm install" or "yarn install".

To run a dev server, run "npm run serve" or "yarn run serve".

To run unit tests, run "npm run test" or "yarn run test"