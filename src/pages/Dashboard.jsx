import React from "react";
import { Link } from "react-router-dom";
import { Compass, Goal, TrendingUp, BarChart3, Layers3, ArrowUpRight, ArrowRight } from "lucide-react";
import "./../components/FeatureCard.css";
import founderPhoto from "../assets/neminath-founder.png";
import workflowImage from "../assets/workflow.png";
import teamWorkingImage from "../assets/Team_Working.png";
import performanceRandomThree from "../assets/performance-random-3.png";
import coBrotherLogo from "../assets/Cobrother_Green.png";
import battrifyLogo from "../assets/Logo.webp";
import grayMaterialLogo from "../assets/gray-material.png";

const businesses = [
  {
    title: "CoBrother",
    subtitle: "Doorstep services with industrial discipline",
    description:
      "The Digital Bridge: CoBrother empowers grassroots South Asian entrepreneurs with domains, branding, automation, and practical business acceleration.",
    image: coBrotherLogo,
    link: "https://cobrother.com/",
  },
  {
    title: "Gray Material",
    subtitle: "Gray Material",
    description:
      "The Physical Foundation: Gray Material delivers standardized quality in industrial aggregates, backed by Vertical Mineral Intelligence and initiatives like Lab-on-Wheels.",
    image: grayMaterialLogo,
    link: "https://www.graymaterial.com/",
  },
  // {
  //   title: "Battrify",
  //   subtitle: "Smart energy and digital ecosystem brand",
  //   description:
  //     "The Scalable Innovation Layer: Battrify connects reliable product execution with future-ready digital and energy ecosystems.",
  //   image: battrifyLogo,
  // },
];

const Dashboard = () => {
  return (
    <div id="top" className="bg-[#f4f4f5] text-zinc-900">
      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-20 pt-16 lg:px-10 lg:pt-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(113,113,122,0.34) 1px, transparent 1px), linear-gradient(to bottom, rgba(113,113,122,0.34) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <h1 className="relative max-w-5xl text-2xl font-medium leading-tight tracking-tight text-zinc-950 md:text-5xl">
          Aultum is just deploying an elite ecosystem and ultimate technologies to hammer out the world&apos;s most ultimate brands.
        </h1>

        <div className="relative mt-10 grid max-w-2xl grid-cols-[96px_1fr] gap-4 border border-zinc-200 bg-[#f8f8f8] p-4 sm:ml-auto">
          <img src={founderPhoto} alt="Akkole" className="h-24 w-24 object-cover grayscale transition duration-500 hover:grayscale-0" />
          <div>
            <p className="text-lg font-bold text-purple-700">
              A note from our Founder, Neminath
            </p>
            <Link to="/founder-note" className="mt-2 inline-block border-b border-zinc-800 text-sm text-zinc-900">
              Read more
            </Link>
          </div>
        </div>
      </section>

      <section id="businesses" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <h2 className="text-4xl font-semibold text-zinc-950 md:text-5xl">Our brands</h2>
        <div className="mt-2 h-1 w-16 bg-blue-400" />
        <p className="mt-5 max-w-5xl text-lg leading-relaxed text-zinc-700 md:text-xl">
          We do not just build companies; we build an interconnected infrastructure. Our 17 years of experience in
          heavy machinery provides the logistical discipline needed to run CoBrother&apos;s doorstep services.
          Conversely, our digital automation expertise allows us to bring unprecedented Mineral Intelligence to the
          traditional world of Gray Material.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business) => (
            <div 
              key={business.title} 
              className="
                group bg-white rounded-2xl p-8 text-center
                border border-zinc-200
                transition-all duration-300 ease-in-out
                hover:shadow-[0_0_35px_rgba(56,189,248,0.35)]
                hover:border-blue-300
                hover:-translate-y-2
                flex flex-col items-center
              "
            >
              <div className="mb-6 h-20 flex items-center justify-center">
                <img
                  src={business.image}
                  alt={`${business.title} brand logo`}
                  className="max-h-16 w-auto grayscale group-hover:grayscale-0 transition duration-300"
                />
              </div>

              <p className="text-zinc-600 text-sm mb-8 flex-grow">
                {business.description}
              </p>

              <a 
                href={business.link}
                target="_blank"
                rel="noopener noreferrer"
                className="feature-button"
              >
                <span>Explore</span>
                <span className="feature-button-icon">
                  <ArrowUpRight size={20} className="default-arrow" />
                  <ArrowRight size={20} className="hover-arrow" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-indigo-100 p-2 text-indigo-700">
                <Compass size={22} />
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-zinc-950 md:text-5xl">Our vision</h2>
            </div>
            <div className="mt-3 h-1.5 w-20 bg-[#8094f4]" />
            <p className="mt-7 text-lg leading-relaxed text-zinc-700 md:text-xl">
              Aultum envisions a future where industrial grit, digital intelligence, and the Done-For-Me philosophy
              form the foundation of enduring success. We foster a culture of execution and trust, empowering our
              ecosystem of companies to bridge the physical and digital worlds.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-cyan-100 p-2 text-cyan-700">
                <Goal size={22} />
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-zinc-950 md:text-5xl">Our mission</h2>
            </div>
            <div className="mt-3 h-1.5 w-20 bg-[#8094f4]" />
            <p className="mt-7 text-lg leading-relaxed text-zinc-700 md:text-xl">
              We do not just build companies; we build interconnected infrastructure. Our 17 years in heavy machinery
              provide the discipline for CoBrother&apos;s doorstep model, while our digital automation expertise brings
              Mineral Intelligence to the traditional world of Gray Material.
            </p>
          </article>
        </div>
      </section>

      <section id="performance" className="relative border-y border-zinc-200 bg-[#efeff3]">
        <div
          className="pointer-events-none absolute inset-0 opacity-45"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(113,113,122,0.32) 1px, transparent 1px), linear-gradient(to bottom, rgba(113,113,122,0.32) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_2fr] lg:px-10">
          <div className="relative">
            <h2 className="text-4xl font-semibold leading-tight text-zinc-950 md:text-5xl">Our performance at a glance</h2>
            <div className="mt-2 h-1 w-16 bg-blue-400" />
          </div>

          <div className="relative rounded-2xl border border-zinc-300 bg-white p-8 md:p-10">
            <p className="text-3xl leading-relaxed text-zinc-800 md:text-4xl md:leading-relaxed">
              &ldquo;Our performance is built on disciplined execution, trusted partnerships, and the continuous
              integration of digital intelligence with industrial-scale operations.&rdquo;
            </p>
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.14em] text-zinc-500">
              Aultum Performance Statement
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-[440px] overflow-hidden border border-zinc-200 bg-white">
            <img
              src={teamWorkingImage}
              alt="Team working at Aultum"
              className="h-[340px] w-full object-cover grayscale transition duration-500 hover:grayscale-0 sm:h-[420px]"
            />
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-zinc-950 md:text-5xl">Working at Aultum</h2>
            <div className="mt-2 h-1 w-16 bg-blue-400" />
            <p className="mt-5 text-lg leading-relaxed text-zinc-700 md:text-xl">
              This place is designed to make you feel uncomfortable, so you can
              keep growing, thinking bigger, and executing with discipline.
            </p>
            <Link to="/culture" className="mt-8 inline-block bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800">
              Learn more about our culture
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Dashboard;