import { Component, OnInit } from '@angular/core';
import { Applicant } from '../ApplicantInterface';
import { ActivatedRoute } from '@angular/router';
import { ApiCallService } from '../api-call.service';
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css'],
})
export class SingleUserComponent {
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private api: ApiCallService
  ) { }
  userId: any;
  users: Applicant[] = [];
  user!: any;
  selectedStatus = '';
  getAll(): void {
    this.api.getAllApplicants().subscribe((users) => {
      this.users = users;

      this.getSingleUser();
      this.selectedStatus = this.user.status;
      this.onSelected(this.selectedStatus);
    });
  }
  getSingleUser(): void {
    this.ActivatedRoute.paramMap.subscribe((param) => {
      this.userId = param.get('id');
      this.user = this.users.find((x) => x._id == this.userId);
    });
  }
  onSelected(value: string): void {
    this.selectedStatus = value;
    this.api.statusChange(this.user._id, this.selectedStatus).subscribe({});
  }
  ngOnInit(): void {
    this.getAll();
  }
}
