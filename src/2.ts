import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolProjectService {

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get('https://api.example.com/projects');
  }

  getProjectById(id: number) {
    return this.http.get(`https://api.example.com/projects/${id}`);
  }

  createProject(project: any) {
    return this.http.post('https://api.example.com/projects', project);
  }

  updateProject(id: number, project: any) {
    return this.http.put(`https://api.example.com/projects/${id}`, project);
  }

  deleteProject(id: number) {
    return this.http.delete(`https://api.example.com/projects/${id}`);
  }
}