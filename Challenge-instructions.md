# Instructions

## Introduction
A wine is made up from grapes of different sources after being blended at the winery.
These grapes have different properties such as the year they were harvested, variety (e.g. Chardonnay, Pinot Noir), and region (e.g. Yarra Valley, Mornington Peninsula, Macedon Ranges, etc).

When bottling a wine, the winery needs to know the percentage breakdown of these properties, so they know what they can legally claim on the wine's label, so it’s important to track this information as wines are blended during production.

There are 3 sample JSON files included that describe some wines currently in production.

## Challenge
Build a small React application with the following requirements:
1) Start with an auto-complete search field that displays wine results based on the sample JSON files
2) Allow a user to select one of the wines from the search results and navigate to the wine detail view
3) In the detail view display the basic details and composition breakdown of the selected wine

Use the following Figma design to create the user interface: https://www.figma.com/file/q813iaYNn4unQQXbBPngal/Code-Challenge-Wine-Viewer?node-id=1%3A1065
(please note: you will need to create a free Figma account to inspect the elements in the designs to view the CSS properties).

### Wines search
As per the Figma design, implement the "Wine search" view as an auto-complete (results appear as you type).
Wines that match the “Lot code” or “Description” (ignoring text case) should be available in the auto-complete results.

Each result in the search field show the "Lot code" and "Description".

When a result is clicked/tapped, navigate to a view showing the details and composition breakdown of a wine.

### Wine details
Summary of what the data represents for each wine (in order of importance):
- Lot code (text, usually 10-12 characters) [reference code used throughout a wine's production]
- Description (text, usually about 40-60 characters) [human readable description of the wine]
- Volume (floating-point number, but rounded to zero places) [how much wine in litres there is of this wine]
- Tank (text, usually about 5-6 characters) [the code of the physical tank that the wine is currently in]
- Product state (text, usually 15-20 characters) [the state that the wine is in... changes throughout production]
- Owner (text, usually about 15-20 characters) [who the owner of the wine is]

You’ll note in the design that there is an Edit button in the top right corner. For this exercise, this can just display a message indicating that it has been clicked.

### Composition breakdown
As per the table at the bottom of the design of the wine detail view, allow the user to select the way they want to see the composition of the wine (by Year, Variety, or Year & Variety).

If the user selects "Year" or "Variety", they want to see the combined percentages for each unique `year` or `variety` in the `components` array in the sample JSON files.

If the user selects “Year & Variety” they want to see the combined percentages for each unique `year` + `variety` combination.

The values in the composition breakdown lists in the designs match the grouping / combining we would expect to see if the user had selected to view the wine described in file `15MPPN002-VK.json`, so feel free to use that as a guide to test your grouping / sorting functions.

The composition breakdowns can get quite long in some cases. When having a glance at the data, a user will always want to see the compositions in order of the percentage they make up (highest first).

## Submission
At vintrace we value the core principles of software engineering, and we favor a testable and maintainable implementation with clear documentation.

Your solution should be set up using `npm` or `yarn` so that it can be easily run, and include any instructions in a `README.md` file.

Look at the data in the JSON files to give you an idea of any potential edge cases that may have an impact on the user interface.
Assume that when I am looking at your submission, I will be viewing each of the wine details as provided in the sample JSON files.

Please submit back to me via a GitHub / GitLab repo link.

Good luck!
