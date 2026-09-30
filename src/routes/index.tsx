import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram, MapPin, Menu, Quote, X } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/emberlane-kitchen-logo.png.asset.json";
import steakImage from "@/assets/emberlane-steak.jpg";
import carrotsImage from "@/assets/emberlane-carrots.jpg";
import interiorImage from "@/assets/emberlane-interior.jpg";
import scallopsImage from "@/assets/emberlane-scallops.jpg";
import eveningImage from "@/assets/emberlane-evening.jpg";
import mark from "@/assets/emberlane_kitchen_logo.png"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emberlane Kitchen | Contemporary British Dining" },
      { name: "description", content: "Emberlane Kitchen is a contemporary British restaurant for generous plates, open-fire cooking and warmly hosted evenings." },
      { property: "og:title", content: "Emberlane Kitchen | Contemporary British Dining" },
      { property: "og:description", content: "Good food. Warm evenings. Discover modern British cooking shaped by the seasons and the flame." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = ["Home", "Menu", "About", "Private Dining", "Gallery", "Contact"];
const menus = [
  { title: "Small Plates", copy: "Thoughtful beginnings, designed to share.", items: ["Coal-roasted sourdough · cultured butter", "Cornish crab · apple · dill", "Crispy lamb shoulder · mint"] },
  { title: "Mains", copy: "Season-led plates with quiet confidence.", items: ["Day-boat hake · mussels · saffron", "Salt-aged duck · beetroot · blackberry", "Wild mushroom pithivier · truffle"] },
  { title: "From the Grill", copy: "British produce, kissed by flame.", items: ["Hereford ribeye · ember onions", "Cornish monkfish · smoked butter", "Glazed pork collar · cider jus"] },
  { title: "Vegetarian", copy: "Vegetables given centre stage.", items: ["Heritage carrots · goat's curd", "Celeriac · hazelnut · lovage", "Barley risotto · woodland mushrooms"] },
  { title: "Desserts", copy: "A final, generous flourish.", items: ["Burnt honey tart · crème fraîche", "Dark chocolate · malt · sea salt", "British cheeses · quince"] },
];

const signatures = [
  { name: "Ember-Grilled Ribeye", price: "£38", note: "Charred spring onion, confit garlic and deep roast jus.", image: steakImage },
  { name: "Hand-Dived Scallops", price: "£19", note: "Cauliflower, brown butter, capers and coastal herbs.", image: scallopsImage },
  { name: "Heritage Carrots", price: "£14", note: "Whipped goat's curd, toasted hazelnut and garden herbs.", image: carrotsImage },
];

const reviews = [
  ["The sort of place where one drink becomes dinner. Every plate felt considered, never fussy.", "Amelia R."],
  ["Warm service, beautiful cooking and a room that makes you want to stay all evening.", "James T."],
  ["That ribeye alone is worth the journey. Confident, generous and absolutely delicious.", "Sophie M."],
];

function Mark({ light = false }: { light?: boolean }) {
  return <a href="#home" aria-label="Emberlane Kitchen home" className="block"><img src={mark} alt="Emberlane Kitchen" className={`h-12 w-auto object-contain ${light ? "brightness-0 invert" : ""}`} width={1408} height={768} /></a>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-cream/40 bg-cream/85 px-5 text-charcoal shadow-xl backdrop-blur-xl lg:px-7">
          <Mark />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-charcoal/60 transition-colors hover:text-primary">{item}</a>)}
          </nav>
          <div className="hidden lg:block"><Button asChild size="default"><a href="#reserve">Reserve a table</a></Button></div>
          <button aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)} className="grid size-10 place-items-center rounded-full border border-charcoal/15 lg:hidden">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
        {menuOpen && <nav className="mx-auto mt-2 max-w-lg rounded-[2rem] border border-charcoal/10 bg-cream p-5 text-charcoal shadow-2xl lg:hidden">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={() => setMenuOpen(false)} className="block border-b border-charcoal/10 py-3 text-sm uppercase tracking-[0.14em]">{item}</a>)}<Button asChild className="mt-5 w-full"><a href="#reserve" onClick={() => setMenuOpen(false)}>Reserve a table</a></Button></nav>}
      </header>

      <section id="home" className="relative mx-3 mt-3 min-h-[calc(100svh-1.5rem)] overflow-hidden rounded-[2.5rem] bg-charcoal text-cream md:mx-6 md:mt-6 md:rounded-[3.75rem]">
        <img src={eveningImage} alt="A candlelit table at Emberlane Kitchen" className="absolute inset-0 h-full w-full scale-[1.03] object-cover opacity-70 transition-transform duration-1000 hover:scale-100" width={1600} height={1008} fetchPriority="high" />
        <div className="hero-shade absolute inset-0" />
        <div className="relative mx-auto flex min-h-[calc(100svh-1.5rem)] max-w-[1440px] flex-col justify-end px-6 pb-14 pt-36 md:px-12 lg:px-20 lg:pb-20">
          <p className="mb-5 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-copper-light"><span className="h-px w-10 bg-copper-light" /> Contemporary British dining</p>
          <h1 className="max-w-4xl font-display text-[clamp(3.8rem,8vw,8.5rem)] leading-[0.88] tracking-normal">Good food.<br /><em className="font-normal text-copper-light">Warm evenings.</em></h1>
          <div className="mt-8 flex max-w-3xl flex-col justify-between gap-7 md:flex-row md:items-center">
            <p className="max-w-md text-base leading-7 text-cream/75">Modern British cooking, shaped by the seasons and centred around the open flame. Come for dinner; stay for the evening.</p>
            <div className="flex flex-wrap gap-3"><Button asChild size="wide"><a href="#reserve">Reserve a table</a></Button><Button asChild variant="outline" size="wide"><a href="#menu">View menu</a></Button></div>
          </div>
        </div>
        <aside className="absolute bottom-8 right-8 hidden w-72 rounded-[2rem] border border-cream/15 bg-charcoal/85 p-6 shadow-2xl backdrop-blur-md xl:block"><span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-copper-light">Tonight at Emberlane</span><p className="mt-3 font-display text-2xl leading-tight">Fire, flavour and a table worth lingering over.</p><a href="#menu" className="mt-5 flex items-center justify-between border-t border-cream/15 pt-4 text-[0.62rem] uppercase tracking-[0.18em] text-cream/60">Explore the menu <ArrowRight size={14} /></a></aside>
      </section>

      <section id="introduction" className="bg-cream py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.7fr_1.3fr] lg:px-10">
          <p className="section-label">Emberlane, London</p>
          <div><h2 className="font-display text-5xl leading-[1.05] text-charcoal md:text-7xl">A neighbourhood dining room with <em className="text-primary">fire at its heart.</em></h2><p className="mt-8 max-w-2xl text-lg leading-8 text-charcoal/65">Emberlane is made for long lunches and slower evenings. Our kitchen cooks with the best of the British seasons, balancing bold flame-led flavours with a light, thoughtful touch.</p></div>
        </div>
      </section>

      <section id="menu" className="mx-3 overflow-hidden rounded-[2.5rem] bg-charcoal py-24 text-cream md:mx-6 md:rounded-[3.75rem] md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="mb-14 flex flex-col justify-between gap-6 border-b border-cream/15 pb-8 md:flex-row md:items-end"><div><p className="section-label text-copper-light">A taste of Emberlane</p><h2 className="mt-4 font-display text-5xl md:text-7xl">The menu</h2></div><p className="max-w-sm text-sm leading-6 text-cream/55">Our menus follow the market. Dishes may change with the weather, the catch and what arrives at the kitchen door.</p></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">{menus.map((menu, index) => <article key={menu.title} className="group min-h-[360px] rounded-[1.75rem] border border-cream/15 bg-cream/[0.04] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-copper-light/50 hover:bg-terracotta"><span className="text-xs text-copper-light group-hover:text-cream/70">0{index + 1}</span><h3 className="mt-20 font-display text-3xl">{menu.title}</h3><p className="mt-3 min-h-12 text-sm leading-6 text-cream/50 group-hover:text-cream/75">{menu.copy}</p><ul className="mt-7 space-y-3 border-t border-cream/15 pt-5 text-xs leading-5 text-cream/75">{menu.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10"><p className="section-label">From our kitchen</p><h2 className="mt-4 max-w-3xl font-display text-5xl text-charcoal md:text-7xl">Signature plates, made to be remembered.</h2>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">{signatures.map((dish, index) => <article key={dish.name} className="group relative min-h-[540px] overflow-hidden rounded-[2.5rem] bg-muted shadow-xl"><img src={dish.image} alt={dish.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy" width={index === 0 ? 1600 : 1200} height={1008} /><div className="card-shade absolute inset-0" /><div className="absolute inset-x-0 bottom-0 p-7 text-cream"><div className="flex items-end justify-between gap-4"><div><span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-copper-light">Signature 0{index + 1}</span><h3 className="mt-2 font-display text-4xl">{dish.name}</h3></div><span className="rounded-full bg-cream px-4 py-2 font-display text-xl text-charcoal">{dish.price}</span></div><p className="mt-4 max-w-sm text-sm leading-6 text-cream/70">{dish.note}</p></div></article>)}</div>
        </div>
      </section>

      <section id="about" className="mx-3 grid overflow-hidden rounded-[2.5rem] bg-terracotta text-cream md:mx-6 md:rounded-[3.75rem] lg:grid-cols-2">
        <div className="m-3 min-h-[520px] overflow-hidden rounded-[2.5rem] md:rounded-[3rem]"><img src={interiorImage} alt="Emberlane Kitchen dining room and open kitchen" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" loading="lazy" width={1600} height={1008} /></div>
        <div className="flex items-center px-6 py-20 md:px-16 lg:px-20"><div className="max-w-xl"><p className="section-label text-copper-light">Our kitchen, our story</p><h2 className="mt-5 font-display text-5xl leading-tight md:text-7xl">Rooted in the season. <em>Led by fire.</em></h2><p className="mt-8 text-base leading-7 text-cream/75">We source with care, cook with purpose and serve without ceremony. The flame is our starting point—not a flourish—bringing depth and character to exceptional British ingredients.</p><p className="mt-5 text-base leading-7 text-cream/75">From the first welcome to the last glass, every detail is considered. The result is dining that feels special, but never stiff.</p><div className="mt-10 flex gap-10 border-t border-cream/20 pt-8"><div><strong className="font-display text-3xl">British</strong><p className="mt-1 text-xs uppercase tracking-[0.15em] text-cream/55">Seasonal produce</p></div><div><strong className="font-display text-3xl">Open fire</strong><p className="mt-1 text-xs uppercase tracking-[0.15em] text-cream/55">Honest cooking</p></div></div></div></div>
      </section>

      <section id="private-dining" className="relative mx-3 mt-6 min-h-[720px] overflow-hidden rounded-[2.5rem] bg-charcoal text-cream md:mx-6 md:rounded-[3.75rem]">
        <img src={eveningImage} alt="Private dining table set for an evening celebration" className="absolute inset-0 h-full w-full object-cover opacity-45" loading="lazy" width={1600} height={1008} />
        <div className="hero-shade absolute inset-0" /><div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-5 lg:px-10"><div className="max-w-2xl border-l border-copper-light pl-7 md:pl-12"><p className="section-label text-copper-light">Private dining</p><h2 className="mt-5 font-display text-5xl leading-[1.05] md:text-7xl">Your occasion,<br /><em>beautifully hosted.</em></h2><p className="mt-7 max-w-xl text-lg leading-8 text-cream/70">For intimate dinners, landmark celebrations and everything worth gathering for. Our private room pairs a bespoke seasonal menu with effortless, attentive service.</p><Button asChild size="wide" className="mt-9"><a href="mailto:events@emberlanekitchen.co.uk">Enquire about an event <ArrowRight size={16} /></a></Button></div></div>
      </section>

      <section id="gallery" className="bg-cream py-24 md:py-32"><div className="mx-auto max-w-[1440px] px-5 lg:px-10"><div className="mb-12 flex items-end justify-between"><div><p className="section-label">Inside Emberlane</p><h2 className="mt-4 font-display text-5xl text-charcoal md:text-7xl">An evening unfolds.</h2></div><a href="#reserve" className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary md:flex">Join us <ArrowRight size={16} /></a></div><div className="gallery-grid"><img src={interiorImage} alt="The open kitchen at Emberlane" loading="lazy" width={1600} height={1008} /><img src={scallopsImage} alt="Hand-dived scallop dish" loading="lazy" width={1200} height={1008} /><img src={steakImage} alt="Ember-grilled ribeye" loading="lazy" width={1600} height={1008} /><img src={carrotsImage} alt="Heritage carrot dish" loading="lazy" width={1200} height={1008} /><img src={eveningImage} alt="A table laid for evening service" loading="lazy" width={1600} height={1008} /></div></div></section>

      <section className="bg-background py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-10"><div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]"><div><p className="section-label">Kind words</p><h2 className="mt-4 font-display text-5xl text-charcoal">Around<br />the table.</h2></div><div className="grid gap-4 md:grid-cols-3">{reviews.map(([review, name]) => <blockquote key={name} className="rounded-[2rem] bg-cream p-7 shadow-sm"><Quote className="text-primary" size={24} strokeWidth={1.5} /><p className="mt-12 font-display text-2xl leading-9 text-charcoal">“{review}”</p><footer className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{name}</footer></blockquote>)}</div></div></div></section>

      <section id="reserve" className="mx-3 overflow-hidden rounded-[2.5rem] bg-charcoal py-24 text-cream md:mx-6 md:rounded-[3.75rem] md:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.75fr_1.25fr] lg:px-10"><div><p className="section-label text-copper-light">Reservations</p><h2 className="mt-5 font-display text-5xl leading-tight md:text-7xl">Your table<br />is waiting.</h2><p className="mt-6 max-w-sm leading-7 text-cream/60">Join us for dinner, drinks and an evening that takes its time.</p><p className="mt-10 text-sm text-cream/60">For groups of 9 or more<br /><a className="text-copper-light" href="mailto:hello@emberlanekitchen.co.uk">hello@emberlanekitchen.co.uk</a></p></div>
          <form onSubmit={submit} className="grid gap-x-5 gap-y-7 md:grid-cols-2">{[["date","Date","date"],["time","Time","time"],["guests","Number of guests","number"],["name","Name","text"],["email","Email","email"],["phone","Phone","tel"]].map(([id,label,type]) => <label key={id} className="form-field"><span>{label}</span><input id={id} name={id} type={type} min={type === "number" ? "1" : undefined} max={type === "number" ? "12" : undefined} required /></label>)}<label className="form-field md:col-span-2"><span>Special request</span><textarea name="request" rows={3} /></label><div className="flex flex-col items-start gap-4 md:col-span-2 md:flex-row md:items-center"><Button type="submit" size="wide">Request a table <ArrowRight size={16} /></Button>{sent && <p role="status" className="text-sm text-copper-light">Thank you — your request has been received.</p>}</div></form>
        </div></section>

      <section id="contact" className="grid bg-cream lg:grid-cols-2"><div className="flex items-center px-6 py-20 md:px-16 lg:px-20"><div className="w-full max-w-xl"><p className="section-label">Find us</p><h2 className="mt-5 font-display text-5xl text-charcoal md:text-7xl">Down the lane,<br /><em>by the glow.</em></h2><div className="mt-10 grid gap-8 border-t border-charcoal/15 pt-8 sm:grid-cols-2"><div><h3 className="detail-heading">Address</h3><p className="detail-copy">Central London<br />Full address coming soon</p></div><div><h3 className="detail-heading">Opening hours</h3><p className="detail-copy">Opening times<br />coming soon</p></div><div><h3 className="detail-heading">Contact</h3><p className="detail-copy">Telephone coming soon<br />hello@emberlanekitchen.co.uk</p></div><div><Button asChild variant="dark"><a href="https://maps.google.com" target="_blank" rel="noreferrer">Get directions <ArrowRight size={15} /></a></Button></div></div></div></div><div className="map-panel min-h-[500px]"><div className="map-grid" /><div className="relative z-10 text-center"><div className="mx-auto grid size-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl"><MapPin /></div><p className="mt-4 font-display text-2xl text-charcoal">Emberlane Kitchen</p><p className="mt-1 text-xs uppercase tracking-[0.18em] text-charcoal/50">Central London</p></div></div></section>

      <section className="relative mx-3 my-6 overflow-hidden rounded-[2.5rem] bg-terracotta px-5 py-28 text-center text-cream md:mx-6 md:rounded-[3.75rem] md:py-36"><p className="section-label text-copper-light">Come for the food. Stay for the feeling.</p><h2 className="mx-auto mt-5 max-w-4xl font-display text-5xl leading-[1.05] md:text-8xl">Make it an evening<br /><em>to remember.</em></h2><Button asChild variant="outline" size="wide" className="mt-10"><a href="#reserve">Reserve a table</a></Button></section>

      <footer className="bg-charcoal px-5 pb-8 pt-20 text-cream lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-12 border-b border-cream/15 pb-14 md:grid-cols-2 lg:grid-cols-4"><div><Mark /><p className="mt-7 max-w-xs text-sm leading-6 text-cream/50">Modern British cooking, warm hospitality and evenings worth lingering over.</p></div><div><h3 className="footer-heading">Explore</h3>{navItems.map(item => <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="footer-link">{item}</a>)}</div><div><h3 className="footer-heading">Opening hours</h3><p className="text-sm leading-7 text-cream/55">Opening times<br />coming soon</p></div><div><h3 className="footer-heading">Stay in touch</h3><p className="text-sm leading-7 text-cream/55">Telephone coming soon<br />hello@emberlanekitchen.co.uk</p><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="mt-6 grid size-10 place-items-center border border-cream/20 hover:border-copper-light hover:text-copper-light"><Instagram size={17} /></a></div></div><div className="flex flex-col justify-between gap-5 pt-7 text-[0.65rem] uppercase tracking-[0.14em] text-cream/35 sm:flex-row"><p>© 2026 Emberlane Kitchen</p><div className="flex gap-6"><a href="#home">Privacy policy</a><a href="#home">Terms</a></div></div></div></footer>
    </main>
  );
}
