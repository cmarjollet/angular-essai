'use strict';

angular.module('angularEssaiApp').directive('navMenu', function($location) {
  return function(scope, element, attrs) {
    var links = element.find('a'),
        onClass = attrs.navMenu || 'on',
        link,
        url,
        currentLink,
        urlMap = {},
        i;

    for (i = 0; i < links.length; i++) {
      link = angular.element(links[i]);
      url = link.attr('ng-href');
      urlMap[url.replace('/#', '')] = link;
    }

    scope.$on('$routeChangeStart', function() {
      var pathLink = urlMap[$location.path()];

      if (pathLink) {
        if (currentLink) {
          currentLink.parent().removeClass(onClass);
        }
        currentLink = pathLink;
        currentLink.parent().addClass(onClass);
      }
    });
  };
});