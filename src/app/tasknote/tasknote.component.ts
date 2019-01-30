import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tasknote",
  templateUrl: "./tasknote.component.html",
  styleUrls: ["./tasknote.component.css"]
})
export class TasknoteComponent implements OnInit {
  Task: String;
  des: String;
  tasks = false;
  onCreate() {
    this.tasks = true;
  }

  constructor() {}

  ngOnInit() {}
}
