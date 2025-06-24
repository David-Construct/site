import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/data";
import { Handshake, Target, Gem, Star } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Pasiunea pentru Lemn, Măiestrie în Construcții
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                David Construct s-a născut din pasiunea pentru lemn și dorința de a construi locuințe care îmbină tradiția cu inovația. Suntem specializați în construcții din lemn, aducând la viață proiecte durabile, eficiente energetic și pline de căldură.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Filosofia noastră se bazează pe respectul pentru acest material nobil, pe comunicare transparentă cu clientul și o atenție meticuloasă la fiecare detaliu, de la structură până la ultimul finisaj.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/pasiunea-pentru-lemn.jpg"
                alt="Echipa David Construct lucreaza la o casa din lemn"
                data-ai-hint="wood house construction"
                width={600}
                height={450}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="bg-primary text-primary-foreground rounded-full p-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold font-headline">Misiunea Noastră</h3>
              <p className="text-muted-foreground">
                Să realizăm construcții din lemn de excepție, sigure, personalizate și perfect integrate în natură, care depășesc așteptările clienților și celebrează frumusețea lemnului.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="bg-primary text-primary-foreground rounded-full p-4">
                <Gem className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold font-headline">Valorile Noastre</h3>
              <p className="text-muted-foreground">
                Calitate, Durabilitate și Pasiune. Aceștia sunt pilonii pe care se sprijină fiecare proiect din lemn pe care îl realizăm, garantând excelența.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="bg-primary text-primary-foreground rounded-full p-4">
                <Handshake className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold font-headline">Filosofia Noastră</h3>
              <p className="text-muted-foreground">
                Credem într-un parteneriat bazat pe încredere. Lucrăm îndeaproape cu dumneavoastră pentru a ne asigura că viziunea prinde viață exact așa cum v-ați imaginat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Ce Spun Clienții Noștri</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Satisfacția clienților este cea mai mare realizare a noastră. Iată câteva păreri de la cei care ne-au încredințat visele lor de lemn.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-stretch gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="flex flex-col">
                <CardContent className="p-6 flex flex-col justify-between flex-grow">
                  <blockquote className="text-lg italic text-muted-foreground mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-auto">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-primary">{testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
