'use strict';

describe('sleep-timing', function () {

    // load the controller's module
    beforeEach(module('sleepyti.meApp'));

    var sleepTiming;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_sleepTiming_) {
        sleepTiming = _sleepTiming_;
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(sleepTiming(3)).to.equal(3);
    });
});
