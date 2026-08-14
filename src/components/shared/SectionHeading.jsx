import React from 'react';
import { cn } from '@/lib/utils';

export function SectionHeading({ 
  title, 
  subtitle, 
  eyebrow, 
  alignment = 'center',
  className 
}) {
  return (
    <div className={cn(
      "flex flex-col gap-4 max-w-3xl mb-12 lg:mb-16",
      alignment === 'center' ? "mx-auto text-center items-center" : "text-left items-start",
      className
    )}>
      {eyebrow && (
        <span className="text-sm tracking-[0.2em] uppercase font-semibold text-brand-blue">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-serif text-brand-deep">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-brand-deep/80 max-w-2xl mt-2 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
