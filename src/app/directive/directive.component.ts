import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  task1 = { name1: '', email1: '' };
  @ViewChild('form1') ngForm: NgForm;

  constructor() {

  }

  ngOnInit() {
  }

}
