import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CustomModal,CustomModalContext } from './custom-modal-sample'

import { CompleterService, CompleterData } from 'ng2-completer';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css'],
  providers: [Modal]
})
export class ModuleComponent implements OnInit {

  protected searchStr: string;
  protected dataService: CompleterData;
  protected selectedColor: string;
  protected value = "mycolor"
  protected searchData = ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black'];
  public letra: any

  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
   }

  ngOnInit() {

  }

protected onSelected(item: any) {
    this.selectedColor = item? item.title: "";
  }
  onKey(event: any){
    if(event != null){
    this.letra = event.target.value
    console.log(this.letra)
    }
    //console.log(event.key += event.key)
  }

/*onClick1() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('A simple Alert style modal window')
        .body(`
            <h4 class='todo'>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
        .open();
  }

  send(){
    console.log("mostrar mensaje")
    this.onClick1();
  }

  onClick() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('A simple Alert style modal window')
        .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
        .open();
  }
  
  openCustom() {
    return this.modal.open(CustomModal,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }*/

  public toggleTitle(){
    //console.log("click en el boton");
    $('.title').slideToggle();
    
  }

}
