import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormField } from '@app/models/field.model';
import { Section, SectionList } from '@app/models/section.model';
import { Template, TemplateList } from '@app/models/template.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http: HttpClient) { }

  getSectionsList(): Observable<SectionList[]> {
    return this.http.get<SectionList[]>('/assets/utilities/section-list.json');
  }

  getAllSections(): Observable<Section[]> {
    return this.http.get<Section[]>('/assets/utilities/sections.json');
  }

  getAllFields(): Observable<FormField[]> {
    return this.http.get<FormField[]>('/assets/utilities/fields.json');
  }

  getTemplateList(): Observable<TemplateList[]> {
    return this.http.get<TemplateList[]>('/assets/utilities/template-list.json');
  }

  getTemplate(templateFileName: string): Observable<Template> {
    return this.http.get<Template>(`/assets/templates/${templateFileName}`);
  }

}
