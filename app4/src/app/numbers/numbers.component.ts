import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent {
  evenNumbers: Array<number> = [2,4,6,8]
  oddNumbers: Array<number> = [1,3,5,7,9]

  showOddNumbers = false
  showOdds(){
    this.showOddNumbers = !this.showOddNumbers
  }
}
