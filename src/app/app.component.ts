import { Component } from '@angular/core';
import { UploadFileComponent } from './upload-file/upload-file.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UploadFileComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
