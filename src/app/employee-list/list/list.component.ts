import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeData } from '../../shared/list-generator.service';
import { List } from 'immutable';

@Component({
  selector: 'sd-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

}
