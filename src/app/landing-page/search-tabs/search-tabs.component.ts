import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-tabs',
  templateUrl: './search-tabs.component.html',
  styleUrls: ['./search-tabs.component.css']
})
export class SearchTabsComponent {
  @Output() tabChanged = new EventEmitter<string>();
  activeTab: string = 'drug'; // Stel een standaard actieve tab in, bijvoorbeeld 'drug'

  setActiveTab(tabName: string): void {
    if (this.activeTab !== tabName) {
      this.activeTab = tabName;
      this.tabChanged.emit(tabName);
    }
  }
}