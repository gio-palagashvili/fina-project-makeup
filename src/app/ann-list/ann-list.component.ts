// announcement-list.component.ts
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Announcement } from '../../interfaces/announcment.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './ann-list.component.html',
  styleUrls: ['./ann-list.component.css']
})
export class AnnouncementListComponent implements OnInit {
  announcements: Announcement[] = [];

  constructor(private storage: StorageService) {
    this.storage.getAnnouncementList()
      .subscribe(announcements => this.announcements = announcements);
    console.log("s");
  }
  ngOnInit(): void {
  }
}
