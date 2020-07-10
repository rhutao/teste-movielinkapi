import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {
  @Input() label: string; 
  @Input() value: string; 
  @Input() lblPlaceholder: string; 
  @Input() customStyle: {};


  constructor() { }

  ngOnInit() {
  }

}
