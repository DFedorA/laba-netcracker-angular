import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

import { environment } from 'src/environments/environment';

export interface Animal{
  id:number
  type:string
  name:string
  age:string
  sex:string
  color:string
  weight:number
  mind:number
  urlImg?:string
}

@Injectable({
  providedIn:'root'
})
export class AppAnimalsService
{
  url = environment.url;
  constructor(private http: HttpClient) {}

  animals: Animal[] =[]
  toggle = true;
  toggleDialogBtn = true;
  catsButton = "Скрыть котиков";
  visibility: boolean = true;
  toggleCats(){
    if (this.toggle === true) {
      this.toggle = !this.toggle;
      this.catsButton = "Показать котиков"
    }
    else {
      this.toggle = !this.toggle;
      this.catsButton = "Скрыть котиков"
    }
  }
  removeAnimal(id:number){
    this.animals = this.animals.filter(p => p.id !== id)
  }

    updateAnimals(animal:Animal){
    animal.id = this.animals.length + 1;
    this.animals.push(animal);
    this.toggleDialogBtn = !this.toggleDialogBtn;

  }
  changeAnimal(animal:Animal){
    this.animals.splice(animal.id-1 , 1, animal);
  }
  toggleDialog(){
    if (this.toggleDialogBtn === true) {
      this.toggleDialogBtn = !this.toggleDialogBtn;
    }
    else {
      this.toggleDialogBtn = !this.toggleDialogBtn;
    }
}
  getById(id: number) {
    return this.animals.find(p => p.id === id)
  }
  fetchAnimals(array){
      for(let i = 0; i < array.length;i++){
      if (this.getById(array[i].id ) === undefined) {
        this.animals.push(array[i]);
      }
    }
  }
  fetchAnimalsHttp():Observable<Animal>{
    return this.http.get<Animal>(`${this.url}/animals`)
  }
  addAnimal(animal:Animal):Observable<Animal>{
   return this.http.post<Animal>(`${this.url}/animals`, animal)
}
  deleteAnimal(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/animals/${id}`)
  }
  patchAnimals(id:number,value):Observable<Animal>{
    return this.http.patch<Animal>(`${this.url}/animals/${id}`,value)
  }

}
//"animalss": [
//{
//"id": 1,
//"type": "кот",
//"name": "Котие",fetchAnimals
//"age": "1 год",
//"sex": "м",
//"color": "черный",
//"weight": 35,
//"mind": 15,
//"urlImg": "https://pbs.twimg.com/profile_images/2860552311/599863b995984d1ed23580d215bca308.jpeg"
//},
//{
//"id": 2,
//"type": "собака",
//"name": "ПесяВторая",
//"age": "3 год",
//"sex": "м",
//"color": "черный",
//"weight": 15,
//"mind": 15,
//"urlImg": "https://i.pinimg.com/474x/4d/37/71/4d3771cdbfba75e6e8c25023585c308c.jpg"
//},
//{
//"id": 3,
//"type": "кот",
//"name": "Китя",
//"age": "1 год",
//"sex": "ж",
//"color": "бедая",
//"weight": 55,
//"mind": 65,
//"urlImg": "https://pbs.twimg.com/profile_images/2860552311/599863b995984d1ed23580d215bca308.jpeg"
//}
//],
