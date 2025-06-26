import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
                Construcții din Lemn Realizate cu Măiestrie
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Descoperiți gama noastră completă de servicii specializate în construcții din lemn. De la case eficiente și moderne, la cabane de poveste și anexe funcționale, suntem aici pentru a vă transforma viziunea în realitate. Oferim flexibilitate, permițând colaborarea atât în regim de manoperă + material, cât și doar manoperă.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-12 md:pb-24 lg:pb-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div key={service.title} className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className={`space-y-4 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{service.title}</div>
                  <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">{service.title}</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed">
                    {service.longDescription}
                  </p>
                   <Button asChild>
                    <Link href="/contact">Solicită Ofertă <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
                <Image
                  src={service.image}
                  alt={service.title}
                  data-ai-hint={service.hint}
                  width={600}
                  height={400}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            ))}
            
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center bg-muted/40 p-8 rounded-lg">
                <div className="space-y-4 lg:order-last">
                  <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Detalii Anexe din Lemn</div>
                  <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">De la Foișoare la Garduri</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground md:text-lg/relaxed">
                    <li><span className="font-semibold">Cabane din lemn:</span> Rustice sau moderne, pentru evadări memorabile.</li>
                    <li><span className="font-semibold">Foișoare:</span> Spații ideale pentru relaxare și socializare în aer liber.</li>
                    <li><span className="font-semibold">Terase:</span> Extensii funcționale și estetice pentru orice locuință.</li>
                    <li><span className="font-semibold">Garduri:</span> Soluții durabile și estetice pentru delimitarea proprietății.</li>
                  </ul>
                   <Button asChild>
                    <Link href="/contact">Proiect Personalizat <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Constructii din lemn diverse"
                  data-ai-hint="wooden gazebo terrace"
                  width={600}
                  height={400}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>

          </div>
        </div>
      </section>
    </>
  );
}
