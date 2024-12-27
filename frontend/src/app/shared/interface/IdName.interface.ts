export interface IdName {
  id: number,
  name: string,
}

export interface IStatus extends IdName { }
export interface IPriority extends IdName { }

export enum PrincipalNames {
  First = 'Status',
  second = 'Priority'
}
