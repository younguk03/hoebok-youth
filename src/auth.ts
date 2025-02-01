import NextAuth from "next-auth"
import google from "next-auth/providers/google"
import kakao from "next-auth/providers/kakao"
import naver from "next-auth/providers/naver"

export const { handlers, signIn, signOut, auth } = NextAuth({
   providers: [google, naver ,kakao, ],
})