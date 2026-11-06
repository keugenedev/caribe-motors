"use client";

import { useMemo, useState } from "react";
import { Calculator, ChevronRight } from "lucide-react";

type Field = "vehiclePrice" | "insurance" | "downPayment" | "term" | "interestRate";
type DurationUnit = "months" | "quarters" | "semesters" | "years";

const DURATION_UNITS: Record<DurationUnit, { label: string; months: number }> = {
  months: { label: "mois", months: 1 },
  quarters: { label: "trimestres", months: 3 },
  semesters: { label: "semestres", months: 6 },
  years: { label: "années", months: 12 },
};

const currency = new Intl.NumberFormat("fr-HT", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function toNumber(value: string) {
  const parsed = Number(value.replace(/,/g, ""));
  return Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
}

export default function FinanceCalculator() {
  const [values, setValues] = useState<Record<Field, string>>({
    vehiclePrice: "",
    insurance: "",
    downPayment: "",
    term: "",
    interestRate: "",
  });
  const [durationUnit, setDurationUnit] = useState<DurationUnit>("months");

  const result = useMemo(() => {
    const vehiclePrice = toNumber(values.vehiclePrice);
    const insurance = toNumber(values.insurance);
    const downPayment = Math.min(toNumber(values.downPayment), vehiclePrice);
    const term = Math.max(1, Math.round(toNumber(values.term) * DURATION_UNITS[durationUnit].months));
    const interestRate = toNumber(values.interestRate);
    const insuranceMonthly = insurance / DURATION_UNITS[durationUnit].months;
    const amountFinanced = Math.max(vehiclePrice - downPayment, 0);
    const monthlyRate = interestRate / 100 / 12;
    const loanPayment = monthlyRate === 0
      ? amountFinanced / term
      : amountFinanced * (monthlyRate * (1 + monthlyRate) ** term) / ((1 + monthlyRate) ** term - 1);

    return {
      amountFinanced,
      loanPayment,
      monthlyPayment: loanPayment + insuranceMonthly,
    };
  }, [durationUnit, values]);

  const updateValue = (field: Field, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  const isEstimateComplete = Object.values(values).every((value) => value.trim() !== "");
  const displayCurrency = (value: number) => isEstimateComplete ? currency.format(value) : "—";
  const insuranceLabel = "Assurance";

  return (
    <div className="mx-auto grid max-w-6xl overflow-hidden border border-slate-200 bg-white sm:grid-cols-2">
      <section className="p-5 sm:p-8" aria-labelledby="finance-form-title">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#eaf3ff] text-[#1643aa]">
            <Calculator className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#54b834]">Estimation de financement</p>
            <h2 id="finance-form-title" className="mt-1 text-2xl font-bold tracking-tight text-[#102a56]">Configurez votre projet</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">Modifiez les montants ci-dessous pour voir votre paiement estimé.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <InputField id="vehiclePrice" label="Prix du véhicule" value={values.vehiclePrice} onChange={(value) => updateValue("vehiclePrice", value)} prefix="$" inputMode="decimal" />
          <InputField id="insurance" label={insuranceLabel} value={values.insurance} onChange={(value) => updateValue("insurance", value)} prefix="$" inputMode="decimal" />
          <InputField id="downPayment" label="Mise de fond (down payment)" value={values.downPayment} onChange={(value) => updateValue("downPayment", value)} prefix="$" inputMode="decimal" />
          <DurationField value={values.term} onChange={(value) => updateValue("term", value)} unit={durationUnit} onUnitChange={setDurationUnit} />
          <InputField id="interestRate" label="Taux d’intérêt annuel" value={values.interestRate} onChange={(value) => updateValue("interestRate", value)} suffix="%" inputMode="decimal" compact />
        </div>

        <div className="mt-7 bg-slate-50 p-4 text-xs leading-5 text-slate-500">
          <p>Cette estimation est fournie à titre indicatif. Les conditions finales, taxes et frais éventuels seront confirmés avec notre équipe.</p>
        </div>
      </section>

      <aside className="bg-[#102a56] text-white" aria-live="polite">
        <div className="px-6 pb-4 pt-5 sm:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a9e797]">Estimation personnalisée</p>
          <div className="mt-3 border border-white/15 px-5 py-3.5">
            <p className="text-sm font-medium text-blue-100">Votre paiement mensuel</p>
            <p className="mt-1 text-4xl font-bold tracking-tight">{displayCurrency(result.monthlyPayment)}</p>
            <p className="mt-1.5 text-xs text-blue-100">{isEstimateComplete ? "Montant à payer chaque mois, assurance comprise" : "Remplissez les champs pour calculer"}</p>
          </div>
        </div>

        <div className="px-6 pb-6 sm:px-8">
          <div className="overflow-hidden border border-white/10 px-5 py-1">
            <SummaryRow label="Montant financé" value={displayCurrency(result.amountFinanced)} />
            <SummaryRow label="Paiement véhicule" value={displayCurrency(result.loanPayment)} />
            <SummaryRow label={insuranceLabel} value={displayCurrency(toNumber(values.insurance))} />
          </div>
          <a href="/contact" className="group mt-5 flex w-full items-center justify-center gap-2 bg-[#54b834] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#469f2d] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#102a56]">
            Parler à un conseiller
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </aside>
    </div>
  );
}

function InputField({
  id,
  label,
  value,
  onChange,
  prefix,
  suffix,
  help,
  inputMode,
  compact = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  prefix?: string;
  suffix?: string;
  help?: string;
  inputMode: "decimal" | "numeric";
  compact?: boolean;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="flex items-start gap-1 text-[13px] font-semibold text-[#102a56]">
        <span className="whitespace-nowrap">{label}</span>
        {help && <span className="ml-auto whitespace-nowrap text-[10px] font-medium leading-4 text-slate-400">{help}</span>}
      </span>
      <span className={`mt-2 flex ${compact ? "max-w-36" : "w-full"}`}>
        <span className="relative min-w-0 flex-1">
          {prefix && <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-sm font-semibold text-slate-400">{prefix}</span>}
          <input id={id} value={value} onChange={(event) => onChange(event.target.value)} inputMode={inputMode} min="0" className={`h-12 w-full border border-slate-200 bg-slate-50 px-4 text-base font-semibold text-[#102a56] outline-none transition placeholder:text-slate-300 focus:border-[#1643aa] focus:bg-white focus:ring-4 focus:ring-[#1643aa]/10 ${prefix ? "pl-8" : ""} ${suffix ? "border-r-0" : ""}`} />
        </span>
        {suffix && <span className="flex h-12 w-10 shrink-0 items-center justify-center border border-slate-200 bg-slate-100 text-sm font-semibold text-slate-500">{suffix}</span>}
      </span>
    </label>
  );
}

function DurationField({ value, onChange, unit, onUnitChange }: { value: string; onChange: (value: string) => void; unit: DurationUnit; onUnitChange: (unit: DurationUnit) => void }) {
  return (
    <label htmlFor="term" className="block">
      <span className="text-sm font-semibold text-[#102a56]">Durée</span>
      <span className="mt-2 flex max-w-xs">
        <input id="term" value={value} onChange={(event) => onChange(event.target.value)} inputMode="numeric" min="0" className="h-12 min-w-0 flex-1 border border-r-0 border-slate-200 bg-slate-50 px-4 text-base font-semibold text-[#102a56] outline-none transition focus:border-[#1643aa] focus:bg-white focus:ring-4 focus:ring-[#1643aa]/10" />
        <select aria-label="Unité de durée" value={unit} onChange={(event) => onUnitChange(event.target.value as DurationUnit)} className="h-12 w-32 border border-slate-200 bg-slate-100 px-2 text-sm font-semibold text-[#102a56] outline-none focus:border-[#1643aa] focus:ring-4 focus:ring-[#1643aa]/10">
          {Object.entries(DURATION_UNITS).map(([key, option]) => <option key={key} value={key}>{option.label}</option>)}
        </select>
      </span>
    </label>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 py-3.5 text-sm last:border-b-0">
      <span className="text-blue-100">{label}</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );
}
