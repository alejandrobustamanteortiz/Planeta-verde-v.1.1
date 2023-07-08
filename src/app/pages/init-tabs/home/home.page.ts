import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { register } from 'swiper/element/bundle';

register();


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  categories!: Category[];

 
  
 
  

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {

    this.categories = this.categoryService.getAll();
    
  }

}
