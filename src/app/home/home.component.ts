import {Component} from '@angular/core'
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToPostsPage() {
    this.router.navigate(['/animals'])
  }
}
