import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Location } from '@angular/common';
import { DogService } from '../../services/dog.services';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html'
})
export class DogComponent implements OnInit {
  dog = { id: 0, url: "" }

  constructor(private route: ActivatedRoute,
    private DogService: DogService,
    private location: Location,
    private router: Router) {

    router.events.subscribe((event: Event) => {

      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.getDog();
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });}

  ngOnInit() {
    this.getDog();
  }

  getDog(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.DogService.getDog(id)
      .subscribe(dog => {
        this.dog = dog[0]
        //console.log(dog, this.dog)
      });
  }

}