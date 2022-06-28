import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0
  password = '';

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onGenerateButtonClick() {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '1234567890';
    let symbols = '!@#$%^&*()_'

    let validChars = ''

    if (this.includeLetters === true) {
      validChars += letters;
    }
    if (this.includeNumbers === true) {
      validChars += numbers;
    }
    if (this.includeSymbols === true) {
      validChars += symbols;
    }

    let generatedPassword = ''
    for (let i = 0; i < this.length; i++) {

      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];

    }
    this.password = generatedPassword;
  }
}
