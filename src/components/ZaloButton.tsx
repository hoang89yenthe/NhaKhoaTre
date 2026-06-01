export default function ZaloButton() {
  return (
    <a
      href="https://zalo.me/0901334334"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nhắn tin Zalo cho Nha Khoa Trẻ"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-transform hover:scale-110 active:scale-95"
      style={{ backgroundColor: "#0068FF" }}
    >
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-40"
        style={{ backgroundColor: "#0068FF" }}
      />

      {/* Zalo SVG logo */}
      <svg
        viewBox="0 0 48 48"
        className="relative h-8 w-8 fill-white"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M24 4C13 4 4 13 4 24c0 4.3 1.4 8.3 3.7 11.6L4 44l8.7-3.6C15.8 42.7 19.8 44 24 44c11 0 20-9 20-20S35 4 24 4zm-7.4 27.2H10l8.5-10.8H11v-2.6h7.3l-8.4 10.8h7.7v2.6zm6.5 0h-2.8V18.8h2.8v12.4zm10.3 0h-7.3V28.8l8.4-10.8h-7.7v-2.6h7.3l-8.5 10.8h7.8v2.6-.6z" />
      </svg>
    </a>
  );
}
