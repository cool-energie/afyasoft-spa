import  User from '@/entities/user/models/User.ts'

export default class Context {
  currentUser: User | null = null
  accessToken: string | null = null
}
