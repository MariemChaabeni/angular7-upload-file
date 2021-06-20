import { Component} from '@angular/core'

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent  {

  files: any = [];

  uploadFile(event: any) {
    if(event.target && event.target.files)
      event = event.target.files

    for (let index = 0; index < event.length; index++) {
      const element: File = event[index];
      this.files.push(element.name)
    }
  }

  deleteAttachment(index: number) {
    this.files.splice(index, 1)
  }
}
