import { Component, OnInit, Input } from '@angular/core';
import { DogService } from '../../services/dog.services';

@Component({
  selector: 'dog-categories',
  templateUrl: './categories.component.html',
  styleUrls: ["./categories.component.css"]
})
export class DogCategoryComponent implements OnInit {
  constructor(
    private DogService: DogService) { }
  categories = [];
  activeLink = "all"
  searchFilter = "";
  ngOnInit(): void {
    this.getDogs();
  }
  getDogs(): void {
    this.DogService.getCategories()
      .subscribe(categories => {
        this.categories = this.categories.concat(categories)
        this.categories.unshift({
          id: "all",
          name: "All"
        })
      });
  }
}