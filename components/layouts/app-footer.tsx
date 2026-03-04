export default function Footer() {
  return (
    <footer className="h-14 bg-white border-t flex items-center justify-center text-sm text-gray-500">
      © {new Date().getFullYear()} Bankku. All rights reserved.
    </footer>
  );
}