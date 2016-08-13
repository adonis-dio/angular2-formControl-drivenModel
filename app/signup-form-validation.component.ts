import {Component} from "angular2/core";
import {ControlGroup, Validators, FormBuilder} from "angular2/common";

@Component({
    selector: 'signup-form-validation',
    templateUrl: './app/views/signup-form-validation.component.html'
})
export class SignUpFormValComponent {
    form:ControlGroup;

    constructor(fb:FormBuilder) {
        this.form = fb.group({
            //current: ['', Validators.compose([Validators.required, UsernameValidators.cannotContainSpace]), UsernameValidators.shouldBeUnique],
            current: ['', Validators.required],
            new: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            confirm: ['', Validators.required]
        })
    }

    signup() {
        if (this.form.find('current').value != '1234') {
            this.form.find('current').setErrors({
                invalidLogin: true
            });
        }

        if (this.form.find('new').value != this.form.find('confirm').value) {
            this.form.find('confirm').setErrors({
                invalidLogin: true
            });
        }
        if(this.form.valid)
            alert("oaisd");
    }
}