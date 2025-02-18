import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, honeypot } = body; // recaptchaToken を削除

    // Honeypot チェック
    if (honeypot) {
      return NextResponse.json({ error: "スパムが検出されました。" }, { status: 400 });
    }

    // reCAPTCHA 検証部分をコメントアウト
    /*
    if (recaptchaToken) {
      const verificationResponse = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
        }
      );
      const verificationResult = await verificationResponse.json();
      if (!verificationResult.success) {
        return NextResponse.json({ error: "reCAPTCHA検証に失敗しました。" }, { status: 400 });
      }
    }
    */

    // Nodemailer の設定
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_RECEIVER,
      subject: `お問い合わせ：${name}`,
      text: `名前: ${name}\nメールアドレス: ${email}\nメッセージ:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json({ error: "メール送信に失敗しました。" }, { status: 500 });
  }
}
