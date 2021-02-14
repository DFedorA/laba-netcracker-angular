import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {FormGroup, FormsModule,NgForm} from "@angular/forms";
import {Animal, AppAnimalsService} from '../services/app-animals.service';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-animals-form',
  templateUrl:'./animal-form.component.html',
  styleUrls:['./animal-form.component.less']
})
export class AnimalFormComponent implements OnInit {
  form: FormGroup

  @Output() onAdd: EventEmitter<Animal> = new EventEmitter<Animal>()
  id?:number = 0;
  type:string
  name:string
  age:string
  sex:string
  color:string
  weight:number = 0
  mind:number = 0
  urlImg?:string = ''

  constructor(public appAnimalsService: AppAnimalsService) {
  }

  ngOnInit() {
  }

  addAnimal() {
    if (this.type.trim() && this.name.trim()) {
      this.appAnimalsService.addAnimal({
        id: this.id,
        type: this.type,
        name: this.name,
        age: this.age,
        sex: this.sex,
        color: this.color,
        weight: this.weight,
        mind: this.mind,
        urlImg: this.urlImg,
      }).subscribe(response => {
        this.onAdd.emit(response)
        this.type = this.name = this.age = this.sex = this.color = this.urlImg ='';
        this.mind = this.weight =this.id = null;
      })
    }
  }

}
