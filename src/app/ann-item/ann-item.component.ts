import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './ann-item.component.html',
  styleUrls: ['./ann-item.component.css']
})
export class AnnouncementComponent implements OnInit {
  announcement: any;

  constructor(private route: ActivatedRoute, private storageService: StorageService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const announcementId = Number(params['id']);
      this.storageService.getAnnouncement(announcementId)
        .subscribe(
          (announcement) => {
            this.announcement = announcement;
          }
        );
    });
  }
}
