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
var user_1 = require("./user");
var enrollment_service_1 = require("./enrollment.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(enrollmentService) {
        this.enrollmentService = enrollmentService;
        /* topics array */
        this.topics = ['JavaScript', 'Angular', 'React', 'Vue'];
        this.userModel = new user_1.User('Dinanath', 'dinanathj@gmail.com', 9892221165, 'default', 'morning', true);
        // class member to hold select option error state
        this.topicHasError = true;
        // create a new data member/property to bind to the view
        this.errorMessage = '';
    }
    // select option validation
    AppComponent.prototype.validateChoosenTopic = function (curValue) {
        if (curValue === 'default') {
            this.topicHasError = true;
        }
        else {
            this.topicHasError = false;
        }
    };
    // handler for submit button
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('submit button clicked');
        console.log(this.userModel);
        this.enrollmentService.enroll(this.userModel)
            .subscribe(function (data) { return console.log('Success!', data); }, 
        //error => console.error('Error!', error) // defualt we log error to console
        // store error in data member / property to bind to the view
        function (error) { return _this.errorMessage = error.statusText; });
        // to empty userModel for new entry
        // this.userModel = new User('','',0,'','',false);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [enrollment_service_1.EnrollmentService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map