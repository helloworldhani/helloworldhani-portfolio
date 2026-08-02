import React from "react";
import { Slide, EyeMark, roles } from "@/components/portfolio-shared";

export default function Home() {
  return (
    <Slide>
      <div className="mb-16"><EyeMark /></div>
      <div className="mb-1 text-sm text-neutral-500">09 Jan, 2026</div>
      <h1 className="text-2xl font-bold text-neutral-900">Creative Presentation</h1>
      <p className="text-sm text-neutral-500 mt-1">Presented By: Hani</p>
      <div className="flex-1" />
      <div className="flex flex-wrap items-center justify-between gap-y-2 text-sm text-neutral-700 mb-6">
        <div className="flex items-center gap-3">
          {roles.map((role, i) => (
            <React.Fragment key={role}>
              <span>{role}</span>
              {i < roles.length - 1 && <span className="text-neutral-300">/</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center gap-6 text-neutral-500">
          <span>helloworldhani@gmail.com</span>
          <span>+0111 11 11 1111</span>
          <span>Somewhere, Philippines</span>
        </div>
      </div>
      <h2
        className="font-black tracking-tight text-neutral-900 -mb-2"
        style={{ fontSize: "clamp(3.5rem, 16vw, 10.5rem)", lineHeight: 0.82 }}
      >
        Portfolio
      </h2>
    </Slide>
  );
}