import Footer from "./Footer";
import Header from "./Header";
import { LayoutProps } from "@/interface"; 

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="pt-28 min-h-screen">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
