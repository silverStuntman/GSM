import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChildUser } from '../child-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() inputData: any;
  @Output() inputDataChange = new EventEmitter<any>();
  ngOnInit(): void {
    this.inputDataChange.emit(this.Users3);
  }

  Users3: ChildUser[] = [
    {
      Id: 1,
      Firstname: 'Tamar',
      Lastname: 'Tamarashvili',
      DateOfBirth: new Date("2004-05-15"),
      PhoneNumber: '597789456',
      Email: 'ttamarashvili@gmail.com'
    },
    {
      Id: 1,
      Firstname: 'Nick',
      Lastname: 'Khain',
      DateOfBirth: new Date("2004-06-01"),
      PhoneNumber: '511457485',
      Email: 'Nick@gmail.com'
    },
    {
      Id: 1,
      Firstname: 'Mikhail',
      Lastname: 'Malafjesky',
      DateOfBirth: new Date("2003-02-07"),
      PhoneNumber: '522326587',
      Email: 'Mikhail@gmail.com'
    },
    {
      Id: 1,
      Firstname: 'Nina',
      Lastname: 'Ckhadadze',
      DateOfBirth: new Date("1978-08-023"),
      PhoneNumber: '574895623',
      Email: 'Nina@gmail.com'
    },
    {
      Id: 1,
      Firstname: 'Nini',
      Lastname: 'Ruadze',
      DateOfBirth: new Date("1999-12-30"),
      PhoneNumber: '511457485',
      Email: 'ninir@gmail.com'
    }
  ]
  sendData() {
    
  }
}
