import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/reducer';
import { MatButtonModule } from '@angular/material/button';
import { RowComponent } from './components/row/row.component';
import { ItemComponent } from './components/item/item.component';
import { RowsComponent } from './components/rows/rows.component';
import { ColsService } from './services/cols.service';
import { NgforbynumberPipe } from './pipes/ngforbynumber.pipe';
import { StatisticsComponent } from './components/statistics/statistics.component';

@NgModule({
	declarations: [ AppComponent, InputComponent, RowComponent, ItemComponent, RowsComponent, NgforbynumberPipe, StatisticsComponent ],
	imports: [
		BrowserModule,
		FormsModule,
		MatFormFieldModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatInputModule,
		StoreModule.forRoot({ appState: reducer })
	],
	providers: [ColsService],
	bootstrap: [ AppComponent ]
})

export class AppModule {}
