import {Component} from 'angular2/core';
import {SignUpFormValComponent} from "./signup-form-validation.component";

@Component({
    selector: 'my-app',
    template: `
    <signup-form-validation></signup-form-validation>
    `,
    directives:[SignUpFormValComponent]
})

export class AppComponent {
}