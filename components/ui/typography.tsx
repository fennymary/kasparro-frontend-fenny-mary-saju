import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Heading({
  level = 2,
  size,
  className = "",
  children,
  ...props
}: HeadingProps) {
  const sizeMap = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  };

  const defaultSize =
    size ||
    {
      1: "xl",
      2: "lg",
      3: "md",
      4: "sm",
    }[level];

  const HeadingTag = `h${level}` as const;

  return (
    <HeadingTag
      className={`font-bold leading-tight ${sizeMap[defaultSize as keyof typeof sizeMap]} ${className}`}
      {...props}
    >
      {children}
    </HeadingTag>
  );
}

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "base" | "lg";
  color?: "primary" | "secondary" | "muted";
  weight?: "normal" | "medium" | "semibold";
}

export function Text({
  size = "base",
  color = "primary",
  weight = "normal",
  className = "",
  children,
  ...props
}: TextProps) {
  const sizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  };

  const colorClasses = {
    primary: "text-slate-900",
    secondary: "text-slate-600",
    muted: "text-slate-500",
  };

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
  };

  return (
    <p
      className={`${sizeClasses[size]} ${colorClasses[color]} ${weightClasses[weight]} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

export function Divider() {
  return <div className="h-px bg-slate-200 my-6" />;
}
