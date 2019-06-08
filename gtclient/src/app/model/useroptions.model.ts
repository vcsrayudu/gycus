
export class UserOptions  {
    privilegesList: Array<any> ;
 userSourceList: Array<any> ;
 tenantStatus: Array<any>;
 constructor() {
      this.privilegesList = [
    { value: 16, label: 'Super User' },
    { value: 8, label: 'Administrator' },
    { value: 2, label: '★★' },
    { value: 3, label: '★★★' },
    { value: 4, label: '★★★★' },
    { value: 5, label: '★★★★★' }
  ];
      this.userSourceList = [
     { value: 'inline password' },
     { value: 'LDAP' }
 ];

      this.tenantStatus = [
     {value: 0, label: 'In Active' },
     {value: 1, label: 'Active'  }
 ];

 }

 }
