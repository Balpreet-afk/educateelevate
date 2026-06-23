import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Educate & Elevate — Your Hassle-Free Path to Studying Abroad" },
      { name: "description", content: "Study-abroad and immigration consultancy guiding students through a clear 12-step journey." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/site/index.html"
      title="Educate & Elevate"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  );
}
