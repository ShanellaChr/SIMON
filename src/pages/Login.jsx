export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-220 h-160 flex flex-row bg-SMaqua rounded-xl drop-shadow-2xl">
        <div>
          {/* side kiri */}
          <div className="w-60 h-full bg-SMnavy text-white rounded-l-xl relative">
            <p className="absolute bottom-20 left-20 rotate-270 text-4xl font-extrabold drop-shadow-2xl text-SMcream font-poppins tracking-wider">
              WELCOME <br /> to SIMON
            </p>
          </div>
        </div>

        <div className="flex-1 px-8 py-6">
          {/* side kanan */}
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Logo Simon"
              src="/src/assets/logoSimon.svg"
              className="mx-auto h-auto w-auto mb-15"
            />
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label className="block text-[18px] font-medium text-SMnavy font-poppins">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    autoComplete="username"
                    placeholder="Write your username here..."
                    className="
                      w-full h-12
                      rounded-lg
                      bg-white
                      px-4
                      font-montserrat
                      text-14 text-gray-700
                      placeholder:text-gray-400
                      border border-gray-400
                      shadow-[inset_0_0_15px_rgba(0,0,0,0.25)]
                      focus:outline-none focus:ring-2 focus:ring-gray-400
                    "
                  />
                </div>
              </div>

              <div>
                <label className="block text-18 font-medium text-SMnavy font-poppins">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    placeholder="Write your password here..."
                    className="
                      w-full h-12
                      rounded-lg
                      bg-white
                      px-4
                      font-montserrat
                      text-14 text-gray-700
                      placeholder:text-gray-400
                      border border-gray-400
                      shadow-[inset_0_0_15px_rgba(0,0,0,0.25)]
                      focus:outline-none focus:ring-2 focus:ring-gray-400
                    "
                  />
                </div>
              </div>


              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="
                    w-50 h-14
                    flex items-center justify-center
                    rounded-md
                    bg-SMnavy text-white
                    font-montserrat font-semibold text-18
                    shadow-[0_12px_24px_rgba(0,0,0,0.25)]
                    hover:bg-SMteal
                    transition-all duration-200
                    focus:outline-none
                  "
                >
                  LOGIN
                </button>
              </div>
            </form>

            <p className="flex justify-center mt-28 text-center text-12 text-SMnavy font-montserrat font-medium">
              ©2025 - Simon NIS C
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}
