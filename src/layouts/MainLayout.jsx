import Nav from "../components/Nav";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-row h-screen w-screen">
      
      {/* Sidebar kiri */}
      <Nav />

      {/* Isi halaman */}
      <div className="flex-1 bg-SMcream ml-2 overflow-auto font-montserrat">
        {children}
      </div>

    </div>
  );
}
