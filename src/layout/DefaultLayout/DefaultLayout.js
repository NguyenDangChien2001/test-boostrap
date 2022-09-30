import Header from "../../component/Header";

function DefaultLayout({ children }) {
  return (
    <div className="bg-dark">
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;
