import React from "react";
import founderPhoto from "../assets/neminath-founder.png";

const FounderNote = () => {
  return (
    <div className="bg-[#f4f4f5]">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-6 md:grid-cols-[96px_1fr] md:items-start">
          <img src={founderPhoto} alt="Neminath" className="h-24 w-24 object-cover grayscale transition duration-500 hover:grayscale-0" />
          <div>
            <p className="text-sm text-zinc-500">30th April 2026</p>
            <h1 className="mt-2 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-zinc-950 md:text-4xl">
              A Note from Founder, <br />
              Neminath Akkole
            </h1>
            <p className="mt-8 max-w-5xl text-2xl leading-relaxed text-zinc-700">
              This letter marks the journey from industrial execution to digital institution-building, and our
              commitment to empowering grassroots entrepreneurs through service, automation, and scale.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-300" />

        <article className="mt-10 max-w-6xl space-y-7 text-xl leading-relaxed text-zinc-700">
          <p>Dear fellow stakeholders and partners,</p>

          <p>
            Seventeen years ago, my world was measured in tons, horsepower, and the relentless grit of the construction
            site. Back then, I wasn&apos;t writing lines of code; I was navigating the heavy machinery industry, a field
            where success is built on physical endurance and industrial scale. I spent nearly two decades in that
            world, but it was a quiet realization about the digital landscape that truly changed my trajectory: the
            understanding that a domain name is not just a web address, but the bedrock of a global identity.
          </p>

          <p>
            Aultum International and CoBrother were not born out of a desire for a &quot;tech exit&quot; or a pursuit of
            academic pedigree. Like many of the best things in life, they were born out of a simple, almost accidental
            spirit of service. I saw the &quot;tech-wary&quot; grassroots entrepreneur, the shopkeeper, the small-scale
            industrialist, the dreamer from an ordinary background, struggling to bridge the gap between their physical
            hard work and the digital future.
          </p>

          <p>
            I started by acquiring domains not to flip them for profit, but to build foundations. I wanted to be
            helpful. I wanted to prove that a dropout with conviction could build a bridge for others to cross.
          </p>

          <p>
            Today, we find ourselves at a tipping point. We are moving beyond simple e-commerce into a new era of
            &quot;meaningful and disruptive&quot; ecosystems. CoBrother.com is my answer to this shift. It is a
            &quot;Done-For-Me&quot; (DFM) mission designed to provide the automation, branding, and partnership that
            South Asian entrepreneurs need to move from simple consumption to disruptive ownership.
          </p>

          <p>
            As we scale, I find myself reflecting on the nature of the institutions we are building. I have always
            been a student of execution and grit, and my goal is to design an organization where culture drives
            outcomes, an institution that empowers our partners to provide better lives for their families and more
            hope for their futures.
          </p>

          <p>
            In this spirit of evolution, we are refining our identity. While CoBrother remains our flagship for the
            entrepreneur, Aultum represents our higher ambition: the &quot;Vertical Mineral Intelligence&quot; and the
            industrial-scale infrastructure that anchors everything we do.
          </p>

          <p>
            The name Aultum is a commitment to the &quot;Ultimate&quot;, a promise to standardize quality and deliver
            excellence at a volume that disrupts the unorganized sector. It is a tall order. To lead Aultum is to wake
            up every day knowing that our &quot;Ultimate&quot; is earned in the moments we choose volume over high
            individual margins, and service over mere revenue.
          </p>

          <p>
            This is more than a business journey; it is a mindset shift. We are showing that people from ordinary
            backgrounds, armed with nothing but conviction, can create large-scale impact. We are building something
            that lasts, not because we have arrived, but because we are constantly hungry to get there.
          </p>

          <p>Thank you for joining in building this future with me.</p>

          <p className="pt-2 text-zinc-900">
            Neminath
            <br />
            Founder &amp; CEO, Aultum International | CoBrother.com
          </p>
        </article>
      </section>
    </div>
  );
};

export default FounderNote;
