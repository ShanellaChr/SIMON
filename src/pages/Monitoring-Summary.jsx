import MainLayout from "../layouts/MainLayout";
import LineBarCoba from "../components/charts/LineBarCoba";


export default function Summary() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold text-SMnavy mb-6">SUMMARY</h1>
      <div className="bg-white rounded-xl shadow p-4">
        <LineBarCoba />
      </div>
    </MainLayout>
  );
}
