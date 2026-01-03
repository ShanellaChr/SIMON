import MainLayout from "../layouts/MainLayout";
import SearchBar from "../components/SearchBar";
import FilterButton from "../components/FilterButton";

export default function SIMCard() {
  return (
    <MainLayout>
      <h1 className="font-poppins font-extrabold text-2xl mb-1">SIM CARD</h1>
      <div className="flex items-center gap-4">
        <SearchBar />
        <FilterButton />
      </div>
    </MainLayout>
  );
}
