import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [focused, setFocused] = useState(null);

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-[#0b1024] to-[#060914] text-gray-200"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-16">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* LEFT INFO */}
          <div className="space-y-6">
            {[
              {
                title: "Location",
                value: "New Delhi, India",
                icon: <FaMapMarkerAlt />,
              },
              {
                title: "Email",
                value: "sumit.kumar120664@gmail.com",
                icon: <FaEnvelope />,
              },
              {
                title: "Phone",
                value: "+91 999-XXX-7XX",
                icon: <FaPhoneAlt />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 p-5 rounded-xl
                           bg-black/40 border border-white/10
                           shadow-[0_12px_45px_rgba(0,0,0,0.7)]
                           hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
                           transition"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-full
                             bg-cyan-400/10 text-cyan-400 text-lg
                             shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="pt-6 flex gap-4 flex-wrap">
              {[
                { icon: <FaGithub />, link: "https://github.com/sumitkr-2" },
                {
                  icon: <FaLinkedinIn />,
                  link: "https://linkedin.com/in/sumit-kumar2004",
                },
                {
                  icon: <FaTwitter />,
                  link: "https://twitter.com/collageuse2004",
                },
                {
                  icon: <FaEnvelope />,
                  link: "mailto:sumit.kumar120664@gmail.com",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-lg
                             border border-cyan-400/40 text-cyan-400
                             shadow-[0_0_15px_rgba(34,211,238,0.35)]
                             hover:bg-cyan-400 hover:text-black
                             hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]
                             hover:-translate-y-1 transition-all"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT FORM (FORMSPREE) */}
          <form
            action="https://formspree.io/f/xdalwnwv" // this is my form key 
            method="POST"
            className="relative p-10 rounded-2xl
                       bg-black/40 border border-white/10
                       shadow-[0_25px_90px_rgba(0,0,0,0.85)]"
          >
            <h3 className="text-2xl font-semibold text-purple-400 mb-10 text-center">
              Send me a message
            </h3>

            {[
              { name: "name", label: "Full Name", type: "text" },
              { name: "email", label: "Email Address", type: "email" },
              { name: "subject", label: "Subject", type: "text" },
            ].map((field) => (
              <div key={field.name} className="relative mb-8">
                <input
                  name={field.name}
                  type={field.type}
                  required
                  placeholder=" "
                  onFocus={() => setFocused(field.name)}
                  onBlur={() => setFocused(null)}
                  className="peer w-full h-14 px-4 pt-4 rounded-xl bg-black/40
                             border border-white/10 text-gray-200 outline-none
                             focus:border-cyan-400 transition"
                />
                <label
                  className={`absolute left-4 top-1/2 -translate-y-1/2 text-gray-400
                              pointer-events-none transition-all
                              peer-not-placeholder-shown:top-3
                              ${
                                focused === field.name
                                  ? "top-2 text-xs text-cyan-400"
                                  : ""
                              }`}
                >
                  {field.label}
                </label>
              </div>
            ))}

            <div className="relative mb-10">
              <textarea
                name="message"
                rows="4"
                required
                placeholder=" "
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className="peer w-full px-4 pt-6 rounded-xl bg-black/40
                           border border-white/10 text-gray-200 outline-none resize-none
                           focus:border-cyan-400 transition"
              />
              <label
                className={`absolute left-4 top-6 text-gray-400
                            pointer-events-none transition-all
                            peer-not-placeholder-shown:top-2
                            ${
                              focused === "message"
                                ? "top-2 text-xs text-cyan-400"
                                : ""
                            }`}
              >
                Message
              </label>
            </div>

            {/* Optional Formspree config */}
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Message 🚀"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-full font-semibold text-black
                         bg-gradient-to-r from-cyan-400 to-teal-400
                         shadow-[0_15px_45px_rgba(34,211,238,0.45)]
                         hover:scale-[1.04] transition-all"
            >
              Send Message ✨
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;