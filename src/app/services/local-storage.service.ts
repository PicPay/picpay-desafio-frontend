import { Injectable } from '@angular/core';
import { LocalStorageSettings } from '@shared/enums/local-storage-settings';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setItem(key: LocalStorageSettings, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
