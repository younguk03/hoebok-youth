'use client'

import { signIn } from "next-auth/react";


export async function googleSignIn() {
   await signIn("google", { redirectTo: '/' })
}

export async function naverSignIn() {
   await signIn("naver", { redirectTo: '/' })
}

export async function kakaoSignIn() {
   await signIn("kakao", { redirectTo: '/' })
}
