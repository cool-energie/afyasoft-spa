import Role from '@/entities/user/models/Role.ts'

export default class User {
  readonly id: string
  username: string
  password: string
  enabled: boolean
  roles: Role[]
  createdAt: Date | undefined

  constructor ({ id, username, password, enabled, roles, createdAt }: User) {
    this.id = id
    this.username = username
    this.password = password
    this.enabled = enabled
    this.roles = (roles == undefined) ? [] : roles.map(r => new Role(r))
    this.createdAt = createdAt ? new Date(createdAt) : undefined
  }
}
