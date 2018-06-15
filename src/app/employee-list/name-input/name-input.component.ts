import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeData } from '../../shared/list-generator.service';
import { List } from 'immutable';

@Component({
  selector: 'sd-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent {
}
