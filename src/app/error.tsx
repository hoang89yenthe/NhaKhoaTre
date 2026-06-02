"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-4 bg-white">
      <h2 className="text-2xl font-bold text-brand-dark font-serif">
        Có lỗi xảy ra
      </h2>
      <p className="mt-2 text-sm text-gray-500 max-w-sm">
        {error.message ?? "Đã xảy ra lỗi không mong muốn. Vui lòng thử lại."}
      </p>
      <button
        onClick={reset}
        className="mt-6 rounded-full bg-brand-primary px-6 py-2.5 text-white text-sm font-semibold hover:bg-brand-dark transition-colors"
      >
        Thử lại
      </button>
    </div>
  );
}
