'use client'
import { useState } from 'react'
import styles from './signInForm.module.css'
import { signIn } from 'next-auth/react';
import { handleSignIn } from '@/actions/login';

export default function SignInForm() {
   const [error, setError] = useState("");

   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   async function onLogin() {
      setError(""); // 기존 에러 초기화
      const res = await handleSignIn(name, password);

      if (res.error) {
         setError(res.error);
         return;
      }

      // ✅ `signIn`은 클라이언트에서 실행
      const result = await signIn("credentials", {
         name,
         password,
         redirect: false,
      });

      if (result?.error) {
         setError(result.error);
      } else {
         console.log("로그인 성공!");
         // 원하는 페이지로 이동 (예: 홈페이지)
         window.location.href = "/";
      }
   }

   return (
      <div className='mt-4 border-b pb-3 mb-2 border-gray-500'>
      {/* <form onSubmit={handleSubmit} > */}
         {error && <div className="text-black">{error}</div>}
         <div>
            <input type="text" placeholder='name' name='name' className={styles.name} onChange={(e) => setName(e.target.value)} value={name}/>
         </div>
         <div>
            <input type="password" placeholder='password' name='password' className={styles.password}  onChange={(e) => setPassword(e.target.value)} value={password}/>
         </div>
         <button onClick={onLogin} className={styles.button}>로그인</button>
      {/* </form> */}
      </div>
   );
}
