export default function Login() {
  return (
    <div>
      <p className="text-SMnavy">TEST WARNA TELWIND</p>
      <p className="text-(--color-SMredAlert) font-bold">
        hanjay kalo gini keluar warnanya, tapi kan repot panjang..
        <br />dibikinin tailwind.config.js gajalan asw 
      </p>

      <div className="min-h-screen flex items-center justify-center">
        <div className="w-220 h-160 bg-blue-400 rounded-2xl shadow-lg">
          {/* isi di dalam backdrop */}
          <h1 className="font-montserrat text-SMtsel">TEST MONTSERRAT dan warna?</h1>
          <p className="font-poppins text-SMnavy">TEST Poppins dan warna?</p>

        </div>
      </div>
    </div>
  )
}
