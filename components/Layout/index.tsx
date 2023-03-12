import Header from './Header';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
