import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  title: string = "Bocor";
  description: string =
    "Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.";

  socialLinks: any[] = [
    { icon: "bx bxl-twitter", name: "twitter" },
    { icon: "bx bxl-facebook", name: "facebook" },
    { icon: "bx bxl-instagram", name: "instagram" },
    { icon: "bx bxl-skype", name: "google-plus" },
    { icon: "bx bxl-linkedin", name: "linkedin" },
  ];
  constructor() {}

  ngOnInit(): void {}
}
