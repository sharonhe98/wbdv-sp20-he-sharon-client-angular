import { Component, OnInit } from '@angular/core';
import {ModuleServiceClient} from '../services/ModuleServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  modules = [];
  moduleId = '';
  courseId = '';
  constructor(private service: ModuleServiceClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
      this.moduleId = params.moduleId;
    })
    this.service.findModulesForCourse(this.courseId).then(modules => {
      console.log(modules);
      this.modules = modules;
    });
  }
}
