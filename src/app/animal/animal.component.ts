import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
 import {Animal, AppAnimalsService} from '../services/app-animals.service';
import {ActivatedRoute, Params, Router} from "@angular/router";
@Component({
  selector: 'app-animal',
  templateUrl:'./animal.component.html',
  styleUrls:['./animal.component.less']
})
export class Animals implements
  OnInit{
  @Input() animal:Animal
  @Output() userNameChange = new EventEmitter<string>();
  @Output() onRemove = new EventEmitter<number>();

ngOnInit() {
}

  constructor(public appAnimalsService: AppAnimalsService) {

  }
  onNameChange(model: string){
    this.animal.name = model;
    this.userNameChange.emit(model);
  }
  aboutAnimalButton ="Подробнее"
  toggle = true;
  aboutAnimal(){
    if (this.toggle === true) {
      this.toggle = !this.toggle;
      this.aboutAnimalButton = "Убрать подробнее"
    }
    else {
      this.toggle = !this.toggle;
      this.aboutAnimalButton = "Подробнее"
    }
  }
  removeAnimal(){
    this.appAnimalsService.deleteAnimal(this.animal.id)
      .subscribe(() => {
        this.onRemove.emit(this.animal.id)
      })
  }


}
