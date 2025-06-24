import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services, portfolio, benefits } from "@/lib/data";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="relative w-full py-24 md:py-32 lg:py-48">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Hero Background"
            priority
            data-ai-hint="cozy wooden house interior"
            fill
            className="object-cover"
          />
          <div className="container px-4 md:px-6 relative z-20">
            <div className="max-w-3xl text-center mx-auto space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Arta Construcțiilor din Lemn: Case Durabile, Pline de Căldură
              </h1>
              <p className="text-lg text-gray-200 md:text-xl">
                Specializați în case pe structură de lemn, cabane A-frame și anexe, transformăm lemnul în acasă.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Solicită o ofertă personalizată</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/portofoliu">Vezi portofoliul nostru</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Serviciile Noastre Specializate în Lemn</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  De la case de locuit la cabane de vis și anexe practice, măiestria noastră în prelucrarea lemnului stă la baza fiecărui proiect.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {services.map((service) => (
                <Card key={service.title} className="h-full transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full p-3">
                         <service.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="flex justify-center">
                <Button asChild>
                    <Link href="/servicii">Vezi toate serviciile <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
          </div>
        </section>

        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Proiectele Noastre Vorbesc de la Sine</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explorați o selecție a lucrărilor noastre și vedeți calitatea și atenția la detalii care ne definesc.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 py-12">
              {portfolio.slice(0, 3).map((project) => (
                 <Card key={project.title} className="overflow-hidden group">
                   <CardContent className="p-0">
                     <Image
                       src={project.image}
                       alt={project.title}
                       data-ai-hint={project.hint}
                       width={400}
                       height={300}
                       className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                     />
                     <div className="p-4">
                       <h3 className="font-headline text-xl font-bold">{project.title}</h3>
                       <p className="text-sm text-muted-foreground">{project.category}</p>
                     </div>
                   </CardContent>
                 </Card>
              ))}
            </div>
            <div className="flex justify-center">
                <Button asChild>
                    <Link href="/portofoliu">Vezi întregul portofoliu <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
          </div>
        </section>

        <section id="why-us" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">De ce David Construct?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Alegerea noastră înseamnă parteneriatul cu o echipă dedicată, specializată în construcții din lemn, transparentă și axată pe calitate, de la concept la cheie.
              </p>
              <ul className="grid gap-4">
                {benefits.map((benefit) => (
                    <li key={benefit.title} className="flex items-start gap-4">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <div>
                            <h3 className="font-bold">{benefit.title}</h3>
                            <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                    </li>
                ))}
              </ul>
            </div>
            <Image
              src="https://placehold.co/600x600.png"
              alt="Echipa la lucru"
              data-ai-hint="construction team wood"
              width={600}
              height={600}
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </section>

        <section id="cta" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Sunteți gata să construiți din lemn?</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                    Contactați-ne astăzi pentru o consultație și o ofertă personalizată pentru proiectul dumneavoastră din lemn.
                </p>
                <div className="mt-6">
                    <Button asChild size="lg">
                        <Link href="/contact">Contactează-ne acum</Link>
                    </Button>
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
