import Nav from "../components/Nav";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-row h-screen w-screen">
      
      {/* Sidebar kiri */}
      <Nav />

      {/* Isi halaman */}
      <div className="flex-1 justify-center bg-SMcream m-2 overflow-auto font-montserrat text-SMnavy">
        {children}
      </div>

    </div>
  );
}
