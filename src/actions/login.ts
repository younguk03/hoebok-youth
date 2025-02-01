'use server'
import connectMongoDB from "@/libs/mongodb"
import User from "@/models/user"
import bcrypt from 'bcryptjs';

export async function handleSignIn(name: string, password: string) {
   try {
      await connectMongoDB();
      const user = await User.findOne({ name });

      if (!user) {
         return { error: "사용자를 찾을 수 없습니다." };
      }

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
         return { error: "비밀번호가 일치하지 않습니다." };
      }

      // ✅ 여기서 signIn()을 호출하지 않음 (클라이언트에서 실행해야 함)
      return { success: true };
   } catch (error) {
      console.error("Sign in error:", error);
      return { error: "An unexpected error occurred" };
   }
}
