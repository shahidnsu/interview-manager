import { Component, OnInit } from '@angular/core';
import { Applicant } from '../../../Interfaces/ApplicantInterface';
import { ActivatedRoute } from '@angular/router';
import { ApiCallService } from '../../../ApiCall/api-call.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css'],
})
export class SingleUserComponent {
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private api: ApiCallService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Details-Applicant');
  }
  userId: any;
  users: Applicant[] = [];
  user!: Applicant;
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
      const searchUser = this.users.find((x) => x._id == this.userId);
      if (searchUser) this.user = searchUser;
    });
  }
  onSelected(value: string): void {
    this.selectedStatus = value;
    if (this.user._id)
      this.api.statusChange(this.user._id, this.selectedStatus).subscribe({});
  }
  deleteUser(id: string): void {
    this.api.deleteUser(id).subscribe({});
  }
  ngOnInit(): void {
    this.getAll();
  }
}
