"use client";

import { ChevronRight } from "react-feather";

type FilterPillProps = {
  readonly label: string;
  readonly href?: string;
  readonly onClick?: () => void;
};

export default function FilterPill({ label, href = "#", onClick }: FilterPillProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="filter-pill"
      aria-label={`Filter by ${label}`}
    >
      <span>{label}</span>
      <ChevronRight size={14} aria-hidden="true" />
    </a>
  );
}
