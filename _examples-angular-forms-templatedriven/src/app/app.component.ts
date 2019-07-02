import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /* topics array */
  topics = ['JavaScript', 'Angular', 'React', 'Vue'];

  userModel = new User('Dinanath', 'dinanathj@gmail.com', 9892221165, 'default', 'morning', true);

  // class member to hold select option error state
  topicHasError = true;

  // to check form submitted or not
  isFormSubmitted = false;

  // select option validation
  validateChoosenTopic(curValue) {
    if (curValue === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  // create a new data member/property to bind to the view
  errorMessage = '';

  constructor(public enrollmentService: EnrollmentService) { }

  // handler for submit button
  onSubmit() {
    console.log('submit button clicked');
    console.log(this.userModel);
    this.isFormSubmitted = true;
    this.enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        //error => console.error('Error!', error) // defualt we log error to console

        // store error in data member / property to bind to the view
        error => this.errorMessage = error.statusText
      )
    // to empty userModel for new entry
    // this.userModel = new User('','',0,'','',false);
  }

  /* onSubmit(curForm) {
    console.log('current User Form reactive details: ', curForm);
  } */

}
