import { Injectable } from '@angular/core';
import { Announcement } from '../interfaces/announcment.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAnnouncementList(): Observable<Announcement[]> {
    return this.http.get(`${this.apiUrl}/announcements`) as Observable<Announcement[]>;
  }

  getAnnouncement(id: number): Observable<Announcement> {
    console.log(`${this.apiUrl}/announcements/${id}`);
    return this.http.get(`${this.apiUrl}/announcements/${id}`) as Observable<Announcement>;
  }
}
