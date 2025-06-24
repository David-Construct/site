import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { workProcess } from "@/lib/data";

export default function ProcessPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
                Procesul Nostru: De la Lemn Brut la Acasă
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Credem într-un proces de lucru bine structurat și transparent. Fiecare etapă este gândită pentru a vă oferi claritate, siguranță și pentru a ne asigura că rezultatul final din lemn este exact cum l-ați visat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-12 md:pb-24 lg:pb-32">
        <div className="container px-4 md:px-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-10 bottom-10 w-0.5 bg-border -translate-x-1/2" aria-hidden="true"></div>

            <div className="grid gap-10">
              {workProcess.map((step, index) => (
                <div key={index} className="flex items-center w-full">
                  <div className="hidden md:flex md:w-5/12"></div>
                  <div className="z-10 flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-lg">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="w-full md:w-5/12 pl-8 md:pl-10">
                    <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="font-headline text-2xl">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
