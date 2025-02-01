import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
   // Mongoose를 사용하는 API 라우트에 대해서는 미들웨어 건너뛰기
   if (request.nextUrl.pathname.startsWith('/api')) {
      return NextResponse.next()
   }

   // 기존 미들웨어 로직
}

// 선택적으로 미들웨어를 사용할 라우트 설정
export const config = {
   matcher: [
      // 미들웨어를 사용할 경로 추가
      // API 라우트 제외
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
   ],
}