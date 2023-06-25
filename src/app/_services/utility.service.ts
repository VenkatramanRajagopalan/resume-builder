import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormField } from '@app/models/field.model';
import { Section, SectionList } from '@app/models/section.model';
import { TemplateDetails, Template } from '@app/models/template.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  private _selectedTemplate: BehaviorSubject<Template> = new BehaviorSubject<Template>(<Template>{});
  private _selectedTemplate$ = this._selectedTemplate.asObservable();
  
  private _selectedSections: BehaviorSubject<Section> = new BehaviorSubject<Section>(<Section>{});
  private _selectedSections$ = this._selectedSections.asObservable();

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

  getTemplateList(): Observable<Template[]> {
    return this.http.get<Template[]>('/assets/utilities/template-list.json');
  }

  getTemplateDetails(templateFileName: string): Observable<TemplateDetails> {
    return this.http.get<TemplateDetails>(`/assets/templates/${templateFileName}`);
  }

  setSelectedTemplate(template: Template): void {
    this._selectedTemplate.next(template);
  }

  getSelectedTemplate(): Observable<Template> {
    return this._selectedTemplate$;
  }

  setSelectedSections(section: Section): void {
    this._selectedSections.next(section);
  }

  getSelectedSections(): Observable<Section> {
    return this._selectedSections$;
  }

}
