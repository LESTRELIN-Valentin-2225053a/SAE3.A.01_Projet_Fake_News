import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/**
 * Module for managing data-related functionalities.
 * Provides implementation for handling HTTP requests and responses.
 */
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [],
    exports: []
})
export class DataModule {}
