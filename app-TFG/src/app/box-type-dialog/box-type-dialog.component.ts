import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef  } from '@angular/material/dialog';


@Component({
  selector: 'app-box-type-dialog',
  templateUrl: './box-type-dialog.component.html',
  styleUrls: ['./box-type-dialog.component.css']
})
export class BoxTypeDialogComponent {

  boxType = ['wavelet', 'arithmeticOperation', 'quantizer', 'other'];

  selectedBoxType: string = 'wavelet';
  inputValue: string = '';
  operationNumber: number = 0;
  waveletLevel: number = 0;
  q_step: number = 0;
  operationType: string = 'add';
  waveletType: string = 'haar';
  returner: any = {type: ''};


  constructor(
    public dialogRef: MatDialogRef<BoxTypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.returner.type = this.selectedBoxType;
    switch (this.selectedBoxType) {
      case 'wavelet':
        this.returner.waveletType = this.waveletType;
        this.returner.waveletLevel = this.waveletLevel;
        break;

      case 'arithmeticOperation':
        this.returner.operationType = this.operationType;
        this.returner.operationNumber = this.operationNumber;
        break;

      case 'quantizer':
        this.returner.q_step = this.q_step;
        break;
    
      default:
        break;
    }

    this.dialogRef.close(this.returner);
  }
}
