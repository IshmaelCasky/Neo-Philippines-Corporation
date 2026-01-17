export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#0B143F] py-20 px-6 md:py-24 md:px-12 relative overflow-hidden"
    >
      {/* Gradient Blob */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#FFE11E] rounded-full blur-[100px] md:blur-[150px] opacity-5 pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 relative z-10">
        {/* Left Content */}
        <div className="reveal-on-scroll">
          <span className="text-[10px] font-mono text-[#FFE11E] block mb-4">
            JOIN OUR TEAM
          </span>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Help Us Shape the Future.
          </h3>
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-md">
            Ready to make an impact? We're looking for passionate individuals to join our growing team.
          </p>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 text-white/80 group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FFE11E] group-hover:text-[#0B143F] transition-colors shrink-0">
                <iconify-icon icon="lucide:map-pin" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-white mb-1">
                  Headquarters
                </h5>
                <p className="text-sm text-white/50">
                  123 Industrial Ave, Davao City
                  <br />
                  Mindanao, Philippines 8000
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 text-white/80 group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FFE11E] group-hover:text-[#0B143F] transition-colors shrink-0">
                <iconify-icon icon="lucide:mail" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-white mb-1">Start Your Journey</h5>
                <p className="text-sm text-white/50">
                  careers@neophilippines.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 reveal-on-scroll delay-100">
          <form className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-white/50">
                  First Name
                </label>
                <input
                  type="text"
                  className="custom-input p-2 text-white w-full"
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-white/50">
                  Last Name
                </label>
                <input
                  type="text"
                  className="custom-input p-2 text-white w-full"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-white/50">
                Email Address
              </label>
              <input
                type="email"
                className="custom-input p-2 text-white w-full"
                placeholder="john@company.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-white/50">
                Why do you want to join us?
              </label>
              <textarea
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:border-[#FFE11E] transition-colors resize-none h-32"
                placeholder="Tell us about yourself..."
              />
            </div>
            <button
              type="button"
              className="group w-full py-4 bg-[#FFE11E] text-[#0B143F] font-bold rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              Send Application
              <iconify-icon
                icon="lucide:send"
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
