import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { StorageService } from '../../services/storage.service';

const userListStorageKey = 'User_List';

const defaultUserList = [
  {name: 'teste'},
  {age: '20'},
  {favMovie: 'Avengers'},
  {favGenre: 'Action'}
];

@Component({
  selector: 'app-cadastro-perfil',
  templateUrl: './cadastro-perfil.component.html',
  styleUrls: ['./cadastro-perfil.component.scss']
})
export class CadastroPerfilComponent implements OnInit {
  userList: any[];
  value1: string = "";
  value2: string = "";
  value3: string = "";
  value4: string = "";
  
  

  label = ["Name", "Age", "Favorite Movie", "Favorite Genre"]
  constructor(private router: Router,private storageService: StorageService) { 
    this.userList = 
    storageService.getData(userListStorageKey) || defaultUserList;
  }

  addItem(item: any) {
    this.userList.push(item);
    this.storageService.setData(userListStorageKey, this.userList);
  }

  updateItem(item: any, changes) {
    const index = this.userList.indexOf(item);
    this.userList[index] = { ...item, ...changes };
    this.storageService.setData(userListStorageKey, this.userList);
  }

  saveList() {
    this.storageService.setData(userListStorageKey, this.userList);
  }

  deleteItem(item: any) {
    const index = this.userList.indexOf(item);
    this.userList.splice(index, 1);
    this.saveList();
  }

  goMovies() {
    this.router.navigate(['/movies-feed']);
    localStorage.setItem('name', this.value1);
    localStorage.setItem('age', this.value2);
    localStorage.setItem('favMovie', this.value3);
    localStorage.setItem('favGenre', this.value4);
  }

  ngOnInit() {
    this.value1 = localStorage.getItem('name');
    this.value2 = localStorage.getItem('age'); 
    this.value3 = localStorage.getItem('favMovie'); 
    this.value4 = localStorage.getItem('favGenre'); 
  }
}
