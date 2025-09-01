import type User from '@/entities/user/models/User.ts'
import Context from '@/helpers/classes/Context.ts'
import axios from 'axios'

export function setSecurityContext(currentUser: User, accessToken: string) {
  let context = JSON.parse(localStorage.getItem('context') as string)
  if (!context) context = new Context()
  context.currentUser = currentUser
  context.accessToken = accessToken
  localStorage.setItem("context", JSON.stringify(context))
}

export function removeSecurityContext() {
  localStorage.removeItem('context')
}

export function getContext() {
  return JSON.parse(localStorage.getItem('context'))
}

export function setAccessToken(accessToken: string) {
  let context = JSON.parse(localStorage.getItem('context') as string)
  if (!context) context = new Context()
  context.accessToken = accessToken
  localStorage.setItem("context", JSON.stringify(context))
}
