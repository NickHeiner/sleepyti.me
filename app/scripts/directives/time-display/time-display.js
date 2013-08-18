'use strict';

angular.module('sleepyti.meApp')
    .directive('timeDisplay', function() {
        return {
            templateUrl: 'scripts/directives/time-display/time-display.html',
            scope: {
                offsets: '=',
                promptText: '@',
                resultsLabel: '@',
                baseTime: '='
            },
            link: function($scope) {
                $scope.hours = _.range(13);
                $scope.minutes = _.range(60);
                $scope.amPm = ['AM', 'PM'];

                $scope.padMinute = function(min) {
                    return min < 10 ? '0' + min : min;
                }
            }
        };
    });