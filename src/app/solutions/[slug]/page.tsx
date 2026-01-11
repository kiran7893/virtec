import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionDetailPage from "@/components/solution-components/SolutionDetailPage";
import { getSolutionBySlug, getAllSolutionSlugs } from "@/lib/solutions";

interface PageParams {
  slug: string;
}

interface GenerateMetadataProps {
  params: Promise<PageParams>;
}

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {
      title: "Solution Not Found | Virtec",
    };
  }

  const url = `/solutions/${slug}`;

  return {
    title: `${solution.title} - ${solution.subtitle} | Virtec`,
    description: solution.description,
    alternates: {
      canonical: url,
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllSolutionSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return notFound();
  }

  // Build FAQ Schema for SEO
  const faqSchema = solution.faqs && solution.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      {/* Inject FAQ Schema for SEO */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="relative min-h-screen bg-white pt-24 sm:pt-28 lg:pt-32">
        <Navbar />
        <SolutionDetailPage solution={solution} />
        <Footer />
      </div>
    </>
  );
}
