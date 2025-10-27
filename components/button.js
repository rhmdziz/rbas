"use client";

import Link from "next/link";

export default function Button({
  href,
  target,
  onClick,
  children,
  variant = "outline",
  className = "",
}) {
  const baseClass = `
    inline-block cursor-pointer rounded-full font-medium transition-all duration-200 hover:translate-y-[-2px] text-sm
  `;

  const variantClass =
    variant === "fill"
      ? "bg-orange text-background py-2 px-4 hover:opacity-90 hover:shadow-lg "
      : "border-2 border-foreground text-foreground px-4 py-2 hover:text-orange hover:border-orange";

  const combinedClass = `${baseClass} ${variantClass} ${className}`;

  if (href) {
    return (
      <Link href={href} target={target || "_self"} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
}
