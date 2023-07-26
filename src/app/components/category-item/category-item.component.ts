import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent  implements OnInit {

  @Input() item!: Category;

  constructor(private router: Router) { }

  ngOnInit() {}

  toByProduct(): void {
  this.router.navigate([`./init-tabs/${this.item.link}`]);
}

}





