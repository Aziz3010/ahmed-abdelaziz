import Link from "next/link";
import styles from "../styles/adminLayout.module.css";
import { Providers } from "@/app/provider";
const { mainAdminElement } = styles;

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <main className={mainAdminElement}>
        <h1>Admin dashboard</h1>
        {children}
        <Link href="/">Back to home page</Link>
      </main>
    </Providers>
  );
};

export default AdminLayout;
