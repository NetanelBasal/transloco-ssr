import { Component } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "transloco-ssr";

  constructor(private service: TranslocoService) {}

  setLang(lang: string) {
    this.service.setActiveLang(lang);
  }
}
