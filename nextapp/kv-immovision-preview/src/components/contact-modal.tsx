'use client';

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const ContactModal = ({ isOpen, onOpenChange }: ContactModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Nehmen Sie Kontakt auf</DialogTitle>
          <DialogDescription>
            Wir freuen uns auf Ihre Nachricht und melden uns umgehend.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Ihr Name</Label>
            <Input id="name" type="text" placeholder="Max Mustermann" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Ihre E-Mail</Label>
            <Input id="email" type="email" placeholder="max.mustermann@email.com" />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Ihre Nachricht</Label>
            <Textarea placeholder="Erzählen Sie uns von Ihrem Anliegen..." id="message" />
          </div>
        </div>
        <Button type="submit" className="w-full">Anfrage senden</Button>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
