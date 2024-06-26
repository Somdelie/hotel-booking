import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {UserResource} from '@clerk/types'
import {User} from '@clerk/nextjs/server'
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isAdmin(user: UserResource | User) {
  return user.publicMetadata?.role === "admin";
}