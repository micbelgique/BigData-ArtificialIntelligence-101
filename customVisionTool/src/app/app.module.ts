import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomSheetDetailComponent } from './bottom-sheet-detail/bottom-sheet-detail.component';
import { DetectorComponent } from './detector/detector.component';
import {
  MatListModule,
  MatProgressBarModule,
  MatSelectModule,
  MatIconModule,
  MatCardModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatGridListModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatDialogModule,
  MatDatepickerModule,
  MatOptionModule,
  MatSliderModule
 } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    BottomSheetDetailComponent,
    DetectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatTabsModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatOptionModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
    BottomSheetDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
