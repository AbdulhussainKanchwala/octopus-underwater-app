import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { MENU_ITEMS } from '../config/menu-meta';
import { MenuItem } from '../models/menu.model';
import { findAllParent, findMenuItem } from '../helper/utils';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit, AfterViewInit {

  @Input() navClasses: string | undefined;
  @Input() includeUserProfile: boolean = false;
  isInitialized: boolean = false;

  leftSidebarClass = 'sidebar-enable';
  activeMenuItems: string[] = [];

  loggedInUser: any = {};


  menuItems: MenuItem[] = [];

  constructor (
    router: Router,
    private eventService: EventService) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this._activateMenu(); //actiavtes menu
        this.hideMenu(); //hides leftbar on change of route
      }
    });


  }

  ngOnInit(): void {
    this.initMenu();
  }

  ngOnChanges(): void {
    if (this.includeUserProfile) {
      document.body.setAttribute("data-sidebar-showuser", "true");
    }
    else {
      document.body.removeAttribute("data-sidebar-showuser");
    }
  }

  /**
   * On view init - activating menuitems
   */
  ngAfterViewInit() {
    setTimeout(() => {
      this._activateMenu();
    });
  }

  /**
   * initialize menuitems
   */
  initMenu(): void {
    this.menuItems = MENU_ITEMS;
  }

  /**
   * activates menu
   */
  _activateMenu(): void {
    const div = document.getElementById('side-menu');
    let matchingMenuItem = null;

    if (div) {
      let items: any = div.getElementsByClassName('side-nav-link-ref');
      for (const element of items) {
        if (window.location.pathname === element.pathname) {
          matchingMenuItem = element;
          break;
        }
      }

      if (matchingMenuItem) {
        const mid = matchingMenuItem.getAttribute('data-menu-key');
        const activeMt = findMenuItem(this.menuItems, mid);
        if (activeMt) {

          const matchingObjs = [activeMt['key'], ...findAllParent(this.menuItems, activeMt)];

          this.activeMenuItems = matchingObjs;

          this.menuItems.forEach((menu: MenuItem) => {
            menu.collapsed = !matchingObjs.includes(menu.key!);
          });
        }
      }
    }
  }

  /**
   * toggles open menu
   * @param menuItem clicked menuitem
   * @param collapse collpase instance
   */
  toggleMenuItem(menuItem: MenuItem, collapse: NgbCollapse): void {
    collapse.toggle();
    let openMenuItems: string[];
    if (!menuItem.collapsed) {
      openMenuItems = ([menuItem['key'], ...findAllParent(this.menuItems, menuItem)]);
      this.menuItems.forEach((menu: MenuItem) => {
        if (!openMenuItems.includes(menu.key!)) {
          menu.collapsed = true;
        }
      })
    }

  }


  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasSubmenu(menu: MenuItem): boolean {
    return menu.children ? true : false;
  }


  /**
   * Hides the menubar
   */
  hideMenu() {
    document.body.classList.remove('sidebar-enable');
  }

}
