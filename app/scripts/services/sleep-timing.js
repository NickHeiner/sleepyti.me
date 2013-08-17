angular.module('sleepyti.meApp')
    .constant('DEFAULT_SLEEP_TIME_MINS', 14)
    .constant('SLEEP_CYCLE_LENGTH', 90)
    .constant('TIMES_COUNT', 4)
    .constant('COEFFICIENTS', [1, 4, 5, 6])
    .factory('offsetFromWakeup', function() {
        return function(wakeupTime) {

        }
    })
    .factory('offsetFromSleep', function(DEFAULT_SLEEP_TIME_MINS, TIMES_COUNT, SLEEP_CYCLE_LENGTH, COEFFICIENTS) {
        return function(sleepTime) {
            var withFallAsleepOffset = moment(sleepTime).add('minutes', DEFAULT_SLEEP_TIME_MINS);
            return _.range(TIMES_COUNT).map(function(index) {
                return moment(withFallAsleepOffset).add('minutes', COEFFICIENTS[index] * SLEEP_CYCLE_LENGTH);
            });
        }
    });