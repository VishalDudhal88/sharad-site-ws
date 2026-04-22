import { projects } from "@/lib/data";
import WorkCard from "@/components/ui/WorkCard";

export default function WorkGrid() {
  return (
    <section id="work" className="work-section" aria-label="Portfolio work grid">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
          {projects.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
