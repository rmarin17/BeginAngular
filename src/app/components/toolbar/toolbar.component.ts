import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-toolar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

    @Input() title: string;

}
