import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-medium rounded-lg transition-colors duration-200 ease-in-out motion-reduce:transition-none motion-safe:transform motion-safe:hover:scale-105 transform-gpu focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none";

  const variants = {
    primary:
      "bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500",
    secondary:
      "bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-500",
    outline:
      "border-2 border-brand-600 text-brand-600 hover:bg-brand-50 focus:ring-brand-500",
    danger: "bg-danger-500 text-white hover:bg-danger-600 focus:ring-danger-500",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

export function Card({
  title,
  description,
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div className={`card-elevated p-6 transform-gpu transition-transform duration-200 ease-out hover:-translate-y-1 ${className}`} {...props}>
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      {description && (
        <p className="text-slate-600 text-sm mb-4">{description}</p>
      )}
      {children}
    </div>
  );
}

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  status?: "pass" | "warning" | "fail" | "pending";
}

export function Badge({ status = "pending", children, ...props }: BadgeProps) {
  const statusClasses = {
    pass: "badge-pass",
    warning: "badge-warning",
    fail: "badge-fail",
    pending: "bg-slate-100 text-slate-600",
  };

  return (
    <span className={`badge-status ${statusClasses[status]}`} {...props}>
      {children}
    </span>
  );
}

interface ScoreDisplayProps {
  score: number;
  maxScore?: number;
  size?: "sm" | "md" | "lg";
}

export function ScoreDisplay({
  score,
  maxScore = 100,
  size = "md",
}: ScoreDisplayProps) {
  const percentage = (score / maxScore) * 100;

  const sizes = {
    sm: "w-12 h-12 text-lg",
    md: "w-16 h-16 text-2xl",
    lg: "w-20 h-20 text-3xl",
  };

  const getColor = () => {
    if (percentage >= 80) return "text-success-600";
    if (percentage >= 60) return "text-warning-600";
    return "text-danger-600";
  };

  return (
    <div role="img" aria-live="polite" aria-label={`Score: ${Math.round(score)} out of ${maxScore}`} className={`flex items-center justify-center rounded-full bg-slate-100 ${sizes[size]} motion-safe:transition-transform motion-reduce:transition-none transform-gpu`}>
      <div className={`font-bold ${getColor()} transition-transform duration-300 ease-out`}>{Math.round(score)}</div>
    </div>
  );
}

interface ProgressBarProps {
  percentage: number;
  label?: string;
  showLabel?: boolean;
}

export function ProgressBar({
  percentage,
  label,
  showLabel = true,
}: ProgressBarProps) {
  const getColor = () => {
    if (percentage >= 80) return "bg-success-500";
    if (percentage >= 60) return "bg-warning-500";
    return "bg-danger-500";
  };

  return (
    <div>
      {showLabel && (
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">{label}</span>
          <span className="text-sm text-slate-600">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(percentage)} aria-label={label || "Progress"}>
        <div
          className={`h-2 rounded-full transform-gpu origin-left transition-transform duration-500 ease-in-out motion-reduce:transition-none ${getColor()}`}
          style={{ transform: `scaleX(${Math.min(percentage, 100) / 100})` }}
        />
      </div>
    </div>
  );
}
