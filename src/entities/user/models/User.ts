import _ from 'lodash'
import Role from '@/entities/user/models/Role.ts'
import { mapToEntity } from '@/helpers/Utils.ts'

export default class User {
  readonly id: string
  username: string
  password: string
  enabled: boolean
  roles: Role[]

  constructor ({ id, username, password, enabled, roles }: User) {
    this.id = id
    this.username = username
    this.password = password
    this.enabled = enabled
    this.roles = (roles == undefined) ? [] : roles.map(r => new Role(r))
  }
}
