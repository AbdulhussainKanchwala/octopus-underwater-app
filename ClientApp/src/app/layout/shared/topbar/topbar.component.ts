import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LayoutEventType } from 'src/app/core/constants/events';
import { EventService } from 'src/app/core/services/event.service';
import { LEFT_SIDEBAR_TYPE_CONDENSED, LEFT_SIDEBAR_TYPE_DEFAULT } from '../config/layout.model';
import { fa } from 'src/app/shared/readModel/fontAwesomeConstants';
import { LoggedInUserService } from 'src/app/core/services/logged-in-user/logged-in-user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Input() leftSidebarTheme: string = 'light';
  fa:any = fa;
  layoutType = 'vertical'

  loggedInUser: any = {};
  topnavCollapsed: boolean = false;
  currentUser:any;

  // output events
  @Output() mobileMenuButtonClicked = new EventEmitter<void>();

  constructor (
    private eventService: EventService,
    private _loggedInUserService: LoggedInUserService
  ) { }

  ngOnInit(): void {
    //Get current logged in user details
    this.currentUser = this._loggedInUserService.getUser();
  }

  /**
   * changes left sidebar width 
   */
  changeSidebarWidth(): void {
    if (document.body.hasAttribute('data-sidebar-size') && document.body.getAttribute('data-sidebar-size') === "condensed") {
      this.eventService.broadcast(LayoutEventType.CHANGE_LEFT_SIDEBAR_TYPE, LEFT_SIDEBAR_TYPE_DEFAULT);
    }
    else {
      this.eventService.broadcast(LayoutEventType.CHANGE_LEFT_SIDEBAR_TYPE, LEFT_SIDEBAR_TYPE_CONDENSED);
    }
  }

  /**
  * Toggle the menu bar when having mobile screen
  */
  toggleMobileMenu(event: any) {
    this.topnavCollapsed = !this.topnavCollapsed;
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  logout(){
    this._loggedInUserService.removeUser();
  }

}
