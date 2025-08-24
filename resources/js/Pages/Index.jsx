import Footer from "./Nav/Footer";
import SideHeader from "./Nav/SideHeader";
import TopHeader from "./Nav/TopHeader";

const Index = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-gray-100" dir="rtl">
            <SideHeader />
            <main className="flex-1">
                <TopHeader />
                <div className="px-6">{children}</div>
                {/* <Footer /> */}
            </main>
        </div>
    );
};

export default Index;
