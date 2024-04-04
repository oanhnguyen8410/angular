import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges {
  @Input() userName = '';
  ngOnChanges(changes:SimpleChanges) {
    console.log('ngOnChanges triggered', changes);
    if (!changes['userName'].isFirstChange()){
        if (changes['userName'].currentValue === "Chris") {
           this.userName = 'Hello ' + this.userName
        } else {
           this.userName = changes['userName'].previousValue
        }
     }
 }
}
