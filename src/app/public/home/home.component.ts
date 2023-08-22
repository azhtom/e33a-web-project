import { Component } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private readonly ps: ProjectService) {}

  projects :any = [];

  getProjects() {
    this.ps.getProjects().subscribe((rest: any) => {
      this.projects = rest.data;
      console.log(this.projects);
    })
  }

  ngOnInit(): void {
    this.getProjects();
  }
}
