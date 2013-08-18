'use strict';

angular.module('sleepyti.meApp')
    .factory('createMoment', function() {
        return function(hour, minute) {
            var result = moment();
            result.hours(hour);
            result.minutes(minute);
            return result;
        };
    });