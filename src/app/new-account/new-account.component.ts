import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService, AccountsService]
  // providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  // @Output() accountAdded = new EventEmitter<{name: string,status: string}>();
  
  constructor(private loggingService : LoggingService, private accountsService: AccountsService) {
    this.accountsService.statusChange.subscribe((status: string)=> alert('status changed to : '+status));
   };

  ngOnInit(): void {

  }

  onCreateAccount(accountName: string, accountStatus: string){
    this.accountsService.addAccount(accountName,accountStatus);   
    // this.loggingService.logStatusChange(accountStatus);

    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    
    // console.log('A server Status Changed, new Status: '+ accountStatus);
    
  }

}
