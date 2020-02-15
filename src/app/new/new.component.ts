import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.scss"]
})
export class NewComponent implements OnInit {
  single;
  slug;
  sub;
  date;
  constructor(public apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.SingleBlog();
  }
  SingleBlog() {
    this.sub = this.route.params.subscribe(params => {
      this.slug = params["product"];
      console.log(this.slug);
    });
    const slugURL = this.slug.split("-");
    const blogID = slugURL.pop();
    console.log(blogID);
    this.apiService.getUserData(blogID).subscribe(response => {
      this.single = response;
      console.log(this.single);
    });
  }
}
