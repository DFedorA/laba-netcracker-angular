import {Component, Input, OnInit} from '@angular/core'
import {Animal, AppAnimalsService} from "../services/app-animals.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.less']
})
export class EditingComponent  implements OnInit{
  @Input() animal:Animal
  form: FormGroup

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appAnimalsService: AppAnimalsService,
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.animal = this.appAnimalsService.getById(+params.id)
    })
    this.form = new FormGroup({
      typing: new FormControl(this.animal.type,[
          Validators.minLength(3)
        ]),
      name: new FormControl(this.animal.name,[
        Validators.minLength(3)
      ]),
      age: new FormControl(this.animal.age,[
        Validators.minLength(1)
      ]),
      sex: new FormControl(this.animal.sex,[
        Validators.minLength(1)
      ]),
      color: new FormControl(this.animal.color,[
        Validators.minLength(4)
      ]),
      weight: new FormControl(this.animal.weight,[
        Validators.minLength(1)
      ]),
      mind: new FormControl(this.animal.mind,[
        Validators.minLength(1)
      ]),
      urlImg: new FormControl(this.animal.urlImg,[
        Validators.minLength(3)
      ])

    })
  }
  submit() {
    if (this.form.valid) {
      this.appAnimalsService.patchAnimals(this.animal.id,{...this.form.value})
        .subscribe(response => {
          console.log('Form submitted: ', this.form);
          const formData = {...this.form.value};
          console.log('Form Data:', formData);
          const animalChange: Animal = {
            id:  this.animal.id,
            type: formData.typing,
            name: formData.name,
            age: formData.age,
            sex: formData.sex,
            color: formData.color,
            weight: formData.weight,
            mind: formData.mind,
            urlImg: formData.urlImg,
          }
          this.appAnimalsService.changeAnimal(animalChange);
          this.router.navigate(['/animals']);
        })

    }

  }
}
// submit() {
//   if (this.form.valid) {
//     console.log('Form submitted: ', this.form);
//     const formData = {...this.form.value};
//     console.log('Form Data:', formData);
//     const animalChange: Animal = {
//       id:  this.animal.id,
//       type: formData.typing,
//       name: formData.name,
//       age: formData.age,
//       sex: formData.sex,
//       color: formData.color,
//       weight: formData.weight,
//       mind: formData.mind,
//       urlImg: formData.urlImg,
//
//     }
//     this.appAnimalsService.changeAnimal(animalChange);
//     this.router.navigate(['/animals']);
//   }
//
//
// }
// this.http.patch<Animal>(`http://localhost:3000/animals/${this.animal.id}`,{...this.form.value})
