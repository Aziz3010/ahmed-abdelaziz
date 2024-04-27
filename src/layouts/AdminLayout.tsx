import Link from "next/link";
import { Providers } from "@/app/provider";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <main>
        <h1>Admin dashboard</h1>
        {children}
        <Link href="/">Back to home page</Link>
      </main>
    </Providers>
  );
};

export default AdminLayout;
