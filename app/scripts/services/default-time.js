angular.module('sleepyti.meApp')
    .constant('DEFAULT_SLEEP_LENGTH_HOURS', 9)
    .factory('defaultSleep', function(DEFAULT_SLEEP_TIME_MINS) {
        return function() {
            return moment().add('minutes', DEFAULT_SLEEP_TIME_MINS);
        }
    })
    .factory('defaultWakeup', function(DEFAULT_SLEEP_LENGTH_HOURS) {
        return function() {
            return moment().hours(DEFAULT_SLEEP_LENGTH_HOURS);
        }
    });