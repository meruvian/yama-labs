'use strict';

describe('Service: Monitoring', function () {

  // load the service's module
  beforeEach(module('websocketApp'));

  // instantiate service
  var Monitoring;
  beforeEach(inject(function (_Monitoring_) {
    Monitoring = _Monitoring_;
  }));

  it('should do something', function () {
    expect(!!Monitoring).toBe(true);
  });

});
