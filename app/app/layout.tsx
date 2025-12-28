export const metadata = {
  title: "Dashboard - Kasparro",
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container-section py-8">
        {children}
      </div>
    </div>
  );
}
