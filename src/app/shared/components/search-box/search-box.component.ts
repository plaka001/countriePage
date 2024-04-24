import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @ViewChild('txtInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  @Output()
  public searchValue: EventEmitter<string> = new EventEmitter();

  emitValue() {
    const valueInput = this.tagInput.nativeElement.value;
    this.searchValue.emit(valueInput);
    this.tagInput.nativeElement.value = '';
  }
}
