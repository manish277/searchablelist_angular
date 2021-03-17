import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
})
export class ListItemsComponent implements OnInit {
  usersAll: any = [];
  userDetails: any;
  usersize: any;
  searchTerm: any;
  filteredItems: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.usersAll = this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((response: any = []) => {
        console.log(response);
        this.usersAll = response;
        this.filteredItems = response;
      });
    this.assignCopy();
  }
  public search(value: any): void {
    console.log('vale', value);
    if (!value) {
      this.assignCopy();
    } // when nothing has typed
    this.filteredItems = Object.assign([], this.usersAll).filter(
      (item: any) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
  }
  public getDetails(user: any): void {
    console.log('user', user);
    this.userDetails = user;
  }
  public assignCopy() {
    this.filteredItems = Object.assign([], this.usersAll);
  }
}
