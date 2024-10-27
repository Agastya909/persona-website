export default function Btn({ href, text }: { href: string; text: string }) {
  return (
    <div className="w-fit shadow-[0_0_1px_0_#ee4266]  bg-neutral-950 rounded hover:bg-[#ee4266] transition-colors">
      <a
        href={href}
        className="font-medium text-[#ee4266] hover:text-white transition-colors p-2 block"
      >
        {text}
      </a>
    </div>
  );
}
