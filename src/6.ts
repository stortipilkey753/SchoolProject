import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class SchoolService {
  constructor(private http: HttpClient) {}

  getSchoolDetails() {
    return this.http.get('https://school-project.com/api/schools').pipe(
      map((response: any) => {
        const schools = response.data.map((school: any) => ({
          id: school.id,
          name: school.name,
          address: school.address,
          city: school.city,
          state: school.state,
          zip: school.zip,
        }));
        return schools;
      })
    );
  }
}
