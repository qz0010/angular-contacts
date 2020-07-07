import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], str: string, searchKeys?: string[]): any[] {
    if (!str) {
      return value;
    }
    const s = this.normalizeString(str);
    return value.filter(data => {
      return this.objDeepSearch(data, s, searchKeys);
    });
  }

  normalizeString(str: string): string {
    return str.replace(/\s/g, '').toLowerCase();
  }

  objDeepSearch(obj: {[key: string]: string | any}, str: string, searchKeys?: string[]): boolean {
    const keys = searchKeys ? Object.keys(obj).filter(k => !!searchKeys.find(sk => sk === k)) : Object.keys(obj);
    return !!keys.filter(key => {
      const v = obj[key];
      if (typeof v === 'object') {
        return this.objDeepSearch(v, str);
      }
      return this.normalizeString(v).indexOf(str) >= 0;
    }).length;
  }
}
