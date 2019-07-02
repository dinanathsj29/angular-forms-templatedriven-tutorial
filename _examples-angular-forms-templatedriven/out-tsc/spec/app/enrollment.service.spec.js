"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var enrollment_service_1 = require("./enrollment.service");
describe('EnrollmentService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [enrollment_service_1.EnrollmentService]
        });
    });
    it('should be created', testing_1.inject([enrollment_service_1.EnrollmentService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=enrollment.service.spec.js.map