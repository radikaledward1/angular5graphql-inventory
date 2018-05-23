import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

import { MzBaseModal, MzModalComponent } from 'ng2-materialize';

@Component({
  selector: 'confirm-modal',
  templateUrl: './confirm.modal.html'
})

export class ConfirmModal extends MzBaseModal implements OnInit {

  @Input() titulo : string;
  @Input() mensaje : string;
  @Input() callback : Function;

  public modalOptions: Materialize.ModalOptions = {
    dismissible: false
  };

  constructor () {

    super();
  }

  ngOnInit()
  {
    //
  }

  success()
  {
    if (this.callback) {
        this.callback();
    }
  }

}
