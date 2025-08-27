export default class Role {
  readonly id: string
  name: string
  displayname: string

  constructor({ id, name, displayname }: Role) {
    this.id = id
    this.name = name
    this.displayname = displayname
  }
}
