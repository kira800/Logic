import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DayComponent } from './day/day.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { GameComponent } from './game/game.component';
import { LineChartComponent } from './data-table/line-chart/line-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DayComponent,
    PortfolioComponent,
    DataTableComponent,
    GameComponent,
    LineChartComponent,
   
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ChartsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
