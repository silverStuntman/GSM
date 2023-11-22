import { Component, OnInit } from '@angular/core';
import { ParentUser } from './parent-user';
import { ChildUser } from './child-user';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Luka-Gobechia';

  Users = [
    {
      firstname: "Luka",
      lastname: "Gobechia",
      age: 18
    },
    {
      firstname: "Nika",
      lastname: "Ganjelashvili",
      age: 19
    },
    {
      firstname: "Mariam",
      lastname: "Baramadze",
      age: 21
    },
    {
      firstname: "Mariam",
      lastname: "Khuroia",
      age: 25
    }
  ];

  Users2: ParentUser[] = [
    { 
      Id: 1,
      Firstname: 'Dachi',
      Lastname: 'looserashvili',
      DateOfBirth: new Date("2004-05-15"),
      PhoneNumber: '597789456',
      Email: 'darchilLooserashivili@gmail.com'
    },
    { 
      Id: 1,
      Firstname: 'Mari',
      Lastname: 'Gmirinashvili',
      DateOfBirth: new Date("2004-06-01"),
      PhoneNumber: '511457485',
      Email: 'mgmirina@gmail.com'
    },
    { 
      Id: 1,
      Firstname: 'Shara',
      Lastname: 'Jollie',
      DateOfBirth: new Date("2003-02-07"),
      PhoneNumber: '522326587',
      Email: 'sj@gmail.com'
    },
    { 
      Id: 1,
      Firstname: 'Tamar',
      Lastname: 'Ghlonti',
      DateOfBirth: new Date("1978-08-023"),
      PhoneNumber: '574895623',
      Email: 'tghlonti@gmail.com'
    },
    { 
      Id: 1,
      Firstname: 'Lasha',
      Lastname: 'Toronjadze',
      DateOfBirth: new Date("1999-12-30"),
      PhoneNumber: '511457485',
      Email: 'Ltojonjadze@gmail.com'
    }     
  ];

  Users3: ChildUser[] = [];

  onInputDataChange(value:ChildUser[]){
   this.Users3 = value;
  }
  
  form: FormGroup;

  ngOnInit(){
      this.form = new FormGroup({
        Id: new FormControl(null),
        Firstname: new FormControl(null),
        Lastname: new FormControl(null),
        DateOfBirth: new FormControl(null),
        PhoneNumber: new FormControl(null),
        Email: new FormControl(null),
      })
  }
}
