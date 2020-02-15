import { Component, OnInit } from "@angular/core";
import { ApiService } from "./api.service";
import { Router } from "@angular/router";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "book-finder-app";
  // items: any;
  // loading;
  // queryField = new FormControl("");
  constructor(
    // private formBuilder: FormBuilder,
    // private router: Router,
    private apiService: ApiService
  ) {}
  ngOnInit() {
    // this.loading = false;
    // this.queryField.valueChanges.subscribe(queryField =>
    //   this.apiService.get(queryField).subscribe((result: any) => {
    //     this.loading = true;
    //     this.items = result.items;
    //     console.log(result);
    //   })
    // );
    // console.log(this.queryField);
  }
  // combineSlug(slug, id) {
  //   console.log(slug, id);
  //   return `${slug}-${id}`;
  // }
}
