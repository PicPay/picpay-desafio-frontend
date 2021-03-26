import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { UserTileComponent } from './user-tile/user-tile.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TransactionDialogComponent } from './transaction-dialog/transaction-dialog.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { getPortuguesePaginatorIntl } from './portuguese-paginator-intl';
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
    declarations: [
        AppComponent,
        UserTileComponent,
        TransactionDialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        FlexLayoutModule,
        MatChipsModule,
        MatIconModule,
        MatTooltipModule,
        HttpClientModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        MatProgressBarModule,
        MatPaginatorModule,
        NgxCurrencyModule,
    ],
    providers: [
        HttpClient,
        { provide: MatPaginatorIntl, useValue: getPortuguesePaginatorIntl() },
    ],
    bootstrap: [AppComponent],
    entryComponents: [TransactionDialogComponent]
})
export class AppModule {
}
