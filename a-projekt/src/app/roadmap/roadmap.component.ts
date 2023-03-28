import { Component } from '@angular/core';


@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent {
  showJavaBasics = false;

  toggleJavaBasics(): void {
    this.showJavaBasics = !this.showJavaBasics;
  }
}

