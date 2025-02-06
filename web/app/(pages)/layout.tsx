import Header from '@/app/components/common/Header';

type TProps = {
    children?: React.ReactNode;
};

const Layout: React.FC<TProps> = ({ children }) => {
    return (
        <>
            <Header />
            <div className="mx-2 my-2 pb-20">{children}</div>
        </>
    );
};

export default Layout;
