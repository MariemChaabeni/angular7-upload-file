import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropDirective } from '../drag-drop.directive';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [CommonModule, DragDropDirective],
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {

  files: string[] = [];

  uploadFile(fileList: FileList): void {
    if (fileList) {
      for (let index = 0; index < fileList.length; index++) {
        const element = fileList[index];
        this.files.push(element.name);
      }
    }
  }

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      this.uploadFile(target.files);
    }
  }

  deleteAttachment(index: number): void {
    this.files.splice(index, 1);
  }
}
