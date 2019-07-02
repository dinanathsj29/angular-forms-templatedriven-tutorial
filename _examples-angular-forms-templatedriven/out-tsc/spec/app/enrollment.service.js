"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var EnrollmentService = /** @class */ (function () {
    function EnrollmentService(_httpClient) {
        this._httpClient = _httpClient;
        // create a variable which hold path to which will post the date
        this._url = 'http://localhost:3000/enroll';
    }
    // create a method called enroll which will post the data to server
    EnrollmentService.prototype.enroll = function (user) {
        return this._httpClient.post(this._url, user);
        // .pipe(catchError(this.errorHandler)) //catch errors
    };
    EnrollmentService.prototype.errorHandler = function (error) {
        return rxjs_1.throwError(error);
    };
    EnrollmentService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], EnrollmentService);
    return EnrollmentService;
}());
exports.EnrollmentService = EnrollmentService;
//# sourceMappingURL=enrollment.service.js.map