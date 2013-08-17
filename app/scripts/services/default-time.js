angular.module('sleepyti.meApp')
    .factory('defaultSleep', function() {
        return function() {
            return moment().hours(0);
        }
    })
    .factory('defaultWakeup', function() {
        return function() {
            return moment().hours(9);
        }
    });