import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {Animal, AppAnimalsService} from "../services/app-animals.service";


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.less']
})

export class AnimalsComponent implements OnInit {
  @Input() animals:Animal
  error = ''
  constructor(public appAnimalsService: AppAnimalsService) {

  }
  ngOnInit() {
    this.appAnimalsService.fetchAnimalsHttp()
      .subscribe(response => {
        console.log('Response', response)
        this.appAnimalsService.fetchAnimals(response);
      }, error => {
        this.error = error.message
        console.log('Error: ', error.message)
      })

  }
}
