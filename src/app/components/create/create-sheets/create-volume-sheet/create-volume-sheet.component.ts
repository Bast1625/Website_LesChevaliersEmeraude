import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

import { SheetComponent } from '../../../sheet/sheet.component';
import { SheetHeaderComponent } from '../../../sheet/sheet-header/sheet-header.component';
import { SheetBodyComponent } from '../../../sheet/sheet-body/sheet-body.component';
import { SheetCardComponent } from '../../../sheet/sheet-card/sheet-card.component';

import { VolumeService } from '../../../../services/volume.service';
import { MatchService } from '../../../../services/match.service';

import { CreateVolumeCoverComponent } from './create-volume-cover/create-volume-cover.component';
import { CreateVolumeContentComponent } from './create-volume-content/create-volume-content.component';
import { CreateVolumeMetadataComponent } from './create-volume-metadata/create-volume-metadata.component';

@Component({
  selector: 'app-create-volume-sheet',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SheetComponent, SheetHeaderComponent, SheetCardComponent, SheetBodyComponent,
    CreateVolumeCoverComponent, CreateVolumeContentComponent, CreateVolumeMetadataComponent
],
  templateUrl: './create-volume-sheet.component.html',
  styleUrl: './create-volume-sheet.component.scss'
})

export class CreateVolumeSheetComponent 
{
    public form : FormGroup = this.formBuilder.group({ });

    public constructor(
        private Router: Router,
        private formBuilder : FormBuilder,
        private volumeService : VolumeService, private matchService : MatchService) { }

    public appendForm(form : { name: string, content: FormGroup }) : void
    {
        this.form.addControl(form.name, form.content);
    }

    public create() : void
    {
        this.volumeService.CreateVolume({
            title: this.form.get("cover")?.get("title")?.value,
            seriesId: this.form.get("cover")?.get("series")?.value["id"],
            bookNumber: this.form.get("cover")?.get("bookNumber")?.value,
            pageCount: this.form.get("content")?.get('pageCount')?.value,
            summary: this.form.get('content')?.get('summary')?.value,
            publicationDate: this.form.get('metadata')?.get('publicationDate')?.value,
            isbn: this.form.get('metadata')?.get('isbn')?.value
        }).subscribe(response => { this.Router.navigate(['create']) });
    }

    public get bookTitle() : string | undefined
    {
        let bookTitle = this.form.get("cover")?.get("title")?.value;

        return bookTitle == '' ? undefined : bookTitle;
    }

    public get fullSeries() : string | undefined
    {
        if(this.bookTitle == undefined)
            return undefined;

        let series = this.form.get("cover")?.get("series")?.value.title;
        let bookNumber = this.form.get("cover")?.get("bookNumber")?.value;

        return this.matchService.series_volumeNumber(series, bookNumber);
    }
}
