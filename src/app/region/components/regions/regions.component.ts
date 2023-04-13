import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from '@core/models';
import { LookupService } from '@core/services';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent {

  states: State[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private lookupService: LookupService) {
    this.lookupService.getStatesByCountryId(1).subscribe(states => {
      this.states = states;
      if (this.states.length) {
        this.router.navigate([this.states[0].id], { relativeTo: this.route });
      }
    });
  }
  
  showRegionDetails(id: Number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
