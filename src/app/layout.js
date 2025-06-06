import "./globals.css";

export const metadata = {
  title: "Task Manager",
  description: "A comprehensive task management application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
