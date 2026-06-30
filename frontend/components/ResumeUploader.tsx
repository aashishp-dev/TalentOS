"use client";

import { Upload } from "lucide-react";
import { useState } from "react";
import { uploadResume } from "@/services/upload";
import { toast } from "sonner";

export default function ResumeUploader() {
  const [loading, setLoading] = useState(false);

  async function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setLoading(true);

    try {
      await uploadResume(file);

      toast.success("Resume uploaded successfully");
    } catch {
      toast.error("Upload failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <label className="rounded-3xl border-2 border-dashed border-slate-700 bg-slate-900 p-10 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 transition">

      <Upload
        size={50}
        className="mb-4 text-indigo-400"
      />

      <h2 className="text-xl font-semibold">
        Upload Resume
      </h2>

      <p className="text-slate-400 mt-2">
        PDF or DOCX
      </p>

      <input
        hidden
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleUpload}
      />

      {loading && (
        <p className="mt-5 text-indigo-400">
          Uploading...
        </p>
      )}
    </label>
  );
}