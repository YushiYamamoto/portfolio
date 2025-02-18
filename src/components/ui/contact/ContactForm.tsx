
"use client";

import React, { useState } from "react";
import SubmitButton from "./SubmitButton";

// URLエンコード用の関数
const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
};

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Ajax送信用のデータ作成（Netlify が認識するために form-name とハニーポットフィールドも含める）
    const formData = {
      "form-name": "contact",
      ...form,
      "bot-field": ""
    };

    try {
      // "/" に対して x-www-form-urlencoded 形式で送信
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(formData)
      });
      setForm({ name: "", email: "", message: "" });
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("送信失敗。もう一度お試しください。");
    }
    setLoading(false);
  };

  return (
    <>
      <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 desktop:w-1/3 ultra:w-1/4 mobile:w-full mobile:px-4 mobile:max-w-3xl">
        <div className="px-2 mx-auto">
          {/* ロゴや画像 */}
          <div className="flex justify-center w-full mb-4">
            <img
              className="h-20 w-20"
              src="/images/pigeon.webp"
              alt="Carrier Pigeon"
            />
          </div>
          {/* フォーム：action 属性は削除（Ajax送信を実施） */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="contact__form"
            onSubmit={handleSubmit}
          >
            {/* Netlify にフォームを認識させるための hidden 入力 */}
            <input type="hidden" name="form-name" value="contact" />

            {/* ハニーポットフィールド（スパム対策） */}
            <p style={{ display: "none" }}>
              <label>
                このフィールドは空欄のままにしてください:
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>

            <div className="contact__form-group mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="山田 太郎"
                value={form.name}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg 
                  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              />
            </div>

            <div className="contact__form-group mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your@mail.com"
                value={form.email}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg 
                  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              />
            </div>

            <div className="contact__form-group mb-4">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="本文を入力"
                value={form.message}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg 
                  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              ></textarea>
            </div>

            <SubmitButton loading={loading} />
            {error && (
              <div className="text-xl flex justify-center items-center h-16">
                {error}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* 送信成功時のポップアップ */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-black">送信成功</h2>
            <p className="text-lg text-black">
              お問い合わせいただきありがとうございます。<br />
              近日中にご連絡いたします。
            </p>
          </div>
          <button
              onClick={() => setSuccess(false)}
              className="mt-2 px-2 py-1 bg-gray-500 text-white rounded"
            >
              ×
            </button>
        </div>
      )}
    </>
  );
}

