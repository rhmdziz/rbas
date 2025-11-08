"use client";
import Link from "next/link";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="flex items-center justify-center gap-2 text-sm font-dm-sans text-white-secondary mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link
              href={item.href}
              className="text-green hover:underline hover:text-orange transition-colors"
            >
              {item.icon ? item.icon : item.label}
            </Link>
          ) : (
            <span className="text-obsidian">{item.label}</span>
          )}

          {index < items.length - 1 && (
            <span className="text-white-secondary">{">"}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
