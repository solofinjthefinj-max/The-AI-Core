import { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
};

export function SectionShell({ title, subtitle, actions, children }: Props) {
  return (
    <section className="card p-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          {subtitle && <p className="text-sm text-slate-400">{subtitle}</p>}
        </div>
        {actions}
      </div>
      {children}
    </section>
  );
}
