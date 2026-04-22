import { type ProjectTag } from "@/lib/data";

type TagListProps = {
  tags: ProjectTag[];
};

export default function TagList({ tags }: TagListProps) {
  return (
    <div className="tag-list">
      {tags.map((tag, idx) => (
        <span key={tag.label} className="tag-item">
          <a href="#" className="tag-link">
            {tag.label}
          </a>
          {idx < tags.length - 1 && (
            <span
              className="tag-separator"
              aria-hidden="true"
            />
          )}
        </span>
      ))}
    </div>
  );
}
