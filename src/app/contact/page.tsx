"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Numele trebuie să aibă cel puțin 2 caractere." }),
  email: z.string().email({ message: "Adresa de email este invalidă." }),
  phone: z.string().min(10, { message: "Numărul de telefon este invalid." }),
  message: z.string().min(10, { message: "Mesajul trebuie să aibă cel puțin 10 caractere." }).max(500, { message: "Mesajul nu poate depăși 500 de caractere." }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Mesaj trimis!",
      description: "Vă mulțumim pentru mesaj. Vă vom contacta în cel mai scurt timp.",
    });
    form.reset();
  }

  return (
    <>
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
                Hai să Construim din Lemn!
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Aveți un proiect din lemn în minte sau doriți mai multe detalii? Completați formularul de mai jos sau folosiți datele de contact. Suntem aici pentru a vă răspunde la întrebări și a vă oferi o ofertă personalizată.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-12 md:pb-24 lg:pb-32">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold font-headline">Date de Contact</h2>
                <div className="space-y-3 text-lg text-muted-foreground">
                    <p className="flex items-center gap-3">
                        <Phone className="h-6 w-6 text-primary" />
                        <a href="tel:+40724084555" className="hover:text-primary transition-colors">+40 724 084 555</a>
                    </p>
                     <p className="flex items-center gap-3">
                        <Mail className="h-6 w-6 text-primary" />
                        <a href="mailto:contact@davidconstruct.ro" className="hover:text-primary transition-colors">contact@davidconstruct.ro</a>
                    </p>
                    <p className="flex items-center gap-3">
                        <MapPin className="h-6 w-6 text-primary" />
                        <span>Lucrăm oriunde în România.</span>
                    </p>
                </div>
                <div className="mt-6">
                    <h3 className="text-2xl font-bold font-headline">Program de lucru</h3>
                    <p className="text-lg text-muted-foreground">Luni - Vineri: 08:00 - 18:00</p>
                    <p className="text-lg text-muted-foreground">Sâmbătă: 09:00 - 13:00</p>
                </div>
            </div>
          </div>
          <div className="space-y-8">
             <h2 className="text-3xl font-bold font-headline">Trimite-ne un Mesaj</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nume și Prenume</FormLabel>
                      <FormControl>
                        <Input placeholder="Ion Popescu" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adresă de Email</FormLabel>
                      <FormControl>
                        <Input placeholder="exemplu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Număr de Telefon</FormLabel>
                      <FormControl>
                        <Input placeholder="0724 084 555" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mesajul Dvs.</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Aș dori o ofertă pentru o casă din lemn..." className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg">Trimite Mesajul</Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
