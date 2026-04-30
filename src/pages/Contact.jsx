import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-[#f4f4f5] min-h-screen">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h1 className="text-4xl font-semibold text-zinc-950 md:text-5xl">Contact Us</h1>
        <div className="mt-2 h-1 w-16 bg-blue-400" />
        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-zinc-700 md:text-xl">
          We'd love to hear from you. Whether you're interested in our services, want to partner with us, or have questions about our brands.
        </p>
        
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple-100 p-3 text-purple-700">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-semibold text-zinc-950">Email</h3>
            </div>
            <p className="mt-4 text-lg text-zinc-700">
              info@aultum.com
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple-100 p-3 text-purple-700">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-semibold text-zinc-950">Phone</h3>
            </div>
            <p className="mt-4 text-lg text-zinc-700">
              8088771144
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple-100 p-3 text-purple-700">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold text-zinc-950">Location</h3>
            </div>
            <p className="mt-4 text-lg text-zinc-700">
              Aultum International Headquarters
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
