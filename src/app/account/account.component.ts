import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService, AccountsService]
  // providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  @Input() account : {name: string, status:string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus:string}>();

  constructor(private loggingService : LoggingService, private accountsService: AccountsService) { };

  ngOnInit(): void {
  }
  onSetTo(statusChangedValue: string){
    this.accountsService.updateAccount(this.id, statusChangedValue);
    this.accountsService.statusChange.emit(statusChangedValue);
    // this.statusChanged.emit({id: this.id, newStatus: statusChangedValue});
    
    // this.loggingService.logStatusChange(status);
    // console.log('A server Status Changed, new status: '+ statusChangedValue);
    
  }

}
