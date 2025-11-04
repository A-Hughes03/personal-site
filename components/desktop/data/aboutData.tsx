import Image from "next/image";

export default function AboutData() {
  return (
    <div className="win95-panel max-w-sm mx-auto text-center">
      <div className="win95-avatar inline-block mb-3">
        <Image
          src="/adamPfp.jpg"
          alt="Adam Hughes"
          width={120}
          height={120}
          className="rounded-sm"
          priority
        />
      </div>

      <h2 className="win95-heading">Adam Hughes</h2>
      <p className="text-xs mb-2">Full Stack Developer & Designer</p>

      <div className="win95-section">
        <div className="win95-label">📍 Indianapolis, IN</div>
        <div className="win95-subsection">
          Building modern web apps with React, TypeScript, and Next.js.
        </div>
      </div>

      <div className="win95-section">
        <div className="win95-label font-bold">Top Technologies</div>
        <ul className="list-none text-xs text-left inline-block">
          <li>• React</li>
          <li>• TypeScript</li>
          <li>• Next.js</li>
          <li>• Tailwind CSS</li>
          <li>• Node.js</li>
        </ul>
      </div>
    </div>
  );
}
