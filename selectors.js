const dropdownButtonSelectors = {
  CHOOSE_CATEGORY_BUTTON: `
    body 
    > div.container.main 
    > div.ng-scope 
    > div 
    > div.row.upper-content 
    > div.col-xs-12.col-sm-4.col-lg-4.ng-scope 
    > div:nth-child(5) 
    > div:nth-child(2) 
    > div 
    > div 
    > button`,
  CHOOSE_SERVICE_BUTTON: `
    body 
    > div.container.main 
    > div.ng-scope 
    > div 
    > div.row.upper-content 
    > div.col-xs-12.col-sm-4.col-lg-4.ng-scope 
    > div:nth-child(5) 
    > div.ng-scope.ng-isolate-scope.ng-empty.ng-valid 
    > div 
    > button`,
  CHOOSE_SERVICE_POINT_BUTTON: `
    body 
    > div.container.main 
    > div.ng-scope 
    > div 
    > div.row.upper-content 
    > div.col-xs-12.col-sm-4.col-lg-4.ng-scope 
    > div.ng-isolate-scope.ng-empty.ng-valid 
    > div 
    > button`,
};

const categoryOptionSelectors = {
  CATEGORY_RESIDENCE_PERMIT: `
   body 
   > div.container.main 
   > div.ng-scope 
   > div 
   > div.row.upper-content 
   > div.col-xs-12.col-sm-4.col-lg-4.ng-scope 
   > div:nth-child(5) 
   > div:nth-child(2) 
   > div 
   > div 
   > ul 
   > li:nth-child(4) 
   > a `,
};

const serviceOptionSelectors = {
  WORK_SELECTOR: `
   body 
   > div.container.main 
   > div.ng-scope 
   > div 
   > div.row.upper-content 
   > div.col-xs-12.col-sm-4.col-lg-4.ng-scope 
   > div:nth-child(5) 
   > div.ng-scope.ng-isolate-scope.ng-empty.ng-valid 
   > div 
   > ul 
   > li:nth-child(1)`,
  STUDIES_SELECTOR: `
   body 
   > div.container.main 
   > div.ng-scope 
   > div 
   > div.row.upper-content 
   > div.col-xs-12.col-sm-4.col-lg-4.ng-scope 
   > div:nth-child(5) 
   > div.ng-scope.ng-isolate-scope.ng-empty.ng-valid 
   > div 
   > ul 
   > li:nth-child(3)`,
  OTHERS_SELECTOR: `
   body 
   > div.container.main 
   > div.ng-scope 
   > div 
   > div.row.upper-content 
   > div.col-xs-12.col-sm-4.col-lg-4.ng-scope 
   > div:nth-child(5) 
   > div.ng-scope.ng-isolate-scope.ng-empty.ng-valid 
   > div 
   > ul 
   > li:nth-child(4)`,
};

const servicePointOptionSelectors = {
  HELSINKI: `
    body 
    > div.container.main 
    > div.ng-scope 
    > div 
    > div.row.upper-content
    > div.col-xs-12.col-sm-4.col-lg-4.ng-scope 
    > div.ng-isolate-scope.ng-empty.ng-valid 
    > div > ul > li:nth-child(2)`,
  ROVANIEMI: `
    body 
    > div.container.main 
    > div.ng-scope 
    > div 
    > div.row.upper-content 
    > div.col-xs-12.col-sm-4.col-lg-4.ng-scope 
    > div.ng-isolate-scope.ng-empty.ng-valid 
    > div 
    > ul 
    > li:nth-child(7)`,
  KUOPIO: `
    body 
    > div.container.main 
    > div.ng-scope 
    > div 
    > div.row.upper-content 
    > div.col-xs-12.col-sm-4.col-lg-4.ng-scope 
    > div.ng-isolate-scope.ng-empty.ng-valid 
    > div 
    > ul 
    > li:nth-child(3)`,
  LAPPEENRANTA: `
    body 
    > div.container.main 
    > div.ng-scope 
    > div 
    > div.row.upper-content 
    > div.col-xs-12.col-sm-4.col-lg-4.ng-scope 
    > div.ng-isolate-scope.ng-empty.ng-valid 
    > div 
    > ul 
    > li:nth-child(5)`,
  TAMPERE: `
    body 
    > div.container.main 
    > div.ng-scope 
    > div 
    > div.row.upper-content 
    > div.col-xs-12.col-sm-4.col-lg-4.ng-scope 
    > div.ng-isolate-scope.ng-empty.ng-valid 
    > div 
    > ul 
    > li:nth-child(9)`,
};

const otherSelectors = {
  SEARCH_BUTTON: `
    body 
    > div.container.main 
    > div.ng-scope 
    > div 
    > div.row.upper-content 
    > div.col-xs-12.col-sm-4.col-lg-4.ng-scope 
    > div.hidden-sm.hidden-md.hidden-lg.in.collapse 
    > button`,
  SEARCH_NEXT_FREE_TIME_BUTTON: `
    body 
    > div.container.main 
    > div.ng-scope 
    > div 
    > div.hidden-sm.hidden-md.hidden-lg.ng-scope 
    > div 
    > div.row.result-row.mobile-result.hidden-sm.hidden-md.hidden-lg 
    > div 
    > div 
    > table 
    > tbody 
    > tr:nth-child(2) 
    > td 
    > div:nth-child(2)`,
  FREE_TIME_PANEL: `
   body 
   > div.container.main 
   > div.ng-scope 
   > div 
   > div.hidden-sm.hidden-md.hidden-lg.ng-scope 
   > div 
   > div.row.result-row.mobile-result.hidden-sm.hidden-md.hidden-lg 
   > div 
   > div 
   > table 
   > tbody 
   > tr:nth-child(1) 
   > td 
   > div 
   > div.panel-group`,
  BOOK_NOW_BUTTON: `
    body 
    > div.container.main
    > div.ng-scope 
    > div 
    > div.well.frontpageBG 
    > div 
    > div 
    > p:nth-child(4) 
    > a`,
};

module.exports = {
  categoryOptionSelectors,
  dropdownButtonSelectors,
  serviceOptionSelectors,
  servicePointOptionSelectors,
  otherSelectors,
};
