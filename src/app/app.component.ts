import {Component} from '@angular/core'
import {Animal, AppAnimalsService} from "./services/app-animals.service";


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.less']

})

export class AppComponent{
  constructor(public appAnimalsService: AppAnimalsService) {
  }

}
