import { Component } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private readonly ps: ProjectService) {}

  getProjects() {
    this.ps.getProjects().subscribe((rest: any) => {
      console.log(rest);
    })
  }

  ngOnInit(): void {
    this.getProjects();
  }
}
