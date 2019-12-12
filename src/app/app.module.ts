import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "../environments/environment";
import { translocoLoader } from "./transloco.loader";
import {
  TranslocoModule,
  provideTranslocoConfig,
  TRANSLOCO_CONFIG
} from "@ngneat/transloco";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    HttpClientModule,
    TranslocoModule
  ],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: {
        reRenderOnLangChange: true,
        availableLangs: ["en", "es"],
        defaultLang: "en",
        prodMode: environment.production
      }
    },
    translocoLoader
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
