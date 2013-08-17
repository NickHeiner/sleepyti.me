angular.module('sleepyti.meApp')
    .constant('DEFAULT_SLEEP_TIME_MINS', 14)
    .constant('SLEEP_CYCLE_LENGTH', 90)
    .constant('TIMES_COUNT', 4)
    .constant('SLEEP_OFFSET_COEFFICIENTS', [1, 4, 5, 6])
    .constant('WAKE_OFFSET_COEFFICIENTS', [6, 5, 4, 3])
    .factory('offsetFromWakeup', function(DEFAULT_SLEEP_TIME_MINS, TIMES_COUNT, SLEEP_CYCLE_LENGTH, WAKE_OFFSET_COEFFICIENTS) {
        return function(wakeupTime) {
            var withFallAsleepOffset = moment(wakeupTime).subtract('minutes', DEFAULT_SLEEP_TIME_MINS);
            return _.range(TIMES_COUNT).map(function(index) {
                return moment(withFallAsleepOffset).subtract('minutes', WAKE_OFFSET_COEFFICIENTS[index] * SLEEP_CYCLE_LENGTH);
            });
        }
    })
    .factory('offsetFromSleep', function(DEFAULT_SLEEP_TIME_MINS, TIMES_COUNT, SLEEP_CYCLE_LENGTH, SLEEP_OFFSET_COEFFICIENTS) {
        return function(sleepTime) {
            var withFallAsleepOffset = moment(sleepTime).add('minutes', DEFAULT_SLEEP_TIME_MINS);
            return _.range(TIMES_COUNT).map(function(index) {
                return moment(withFallAsleepOffset).add('minutes', SLEEP_OFFSET_COEFFICIENTS[index] * SLEEP_CYCLE_LENGTH);
            });
        }
    });