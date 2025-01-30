import { Header } from "@/app/components/Header";


export default function PagesLayout({ children } : { children: React.ReactNode}) {
  return (
    <div>
        <Header />
        {children}
    </div>
  );
}