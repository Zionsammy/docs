import { DocsHeader } from "@/components/DocsHeader";
import { PrevNextLinks } from "@/components/PrevNextLinks";
import { Prose } from "@/components/Prose";
import { TableOfContents } from "@/components/TableOfContents";
import { Section } from "@/lib/interfaces";

export function DocsLayout({
  children,
  frontmatter: { title },
  sections,
}: {
  children: React.ReactNode;
  frontmatter: { title?: string };
  sections: Section[];
}) {
  return (
    <>
      <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-4">
        <article>
          <DocsHeader title={title} />
          <Prose>{children}</Prose>
        </article>
        <PrevNextLinks />
      </div>
      <TableOfContents tableOfContents={sections} />
    </>
  );
}
