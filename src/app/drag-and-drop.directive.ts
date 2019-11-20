import { Directive, HostBinding, HostListener, Output, EventEmitter} from "@angular/core";

@Directive({
  selector: '[appDragAndDrop]'
})
export class DragAndDropDirective {
  @Output() dropedFilesEvent: EventEmitter<any> = new EventEmitter();
  @HostBinding("style.background") private background = "#eee";
  
  @HostListener("dragover", ["$event"]) public onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.background = "#999";
  }
  @HostListener("dragleave", ["$event"]) public onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.background = "#eee";
  }
  @HostListener('drop', ['$event']) public onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#eee';
    // console.log(event.dataTransfer.files);
    this.dropedFilesEvent.emit(event);
  }

}
