import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, User, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type LeadFormVariant = "full" | "compact";

interface LeadFormProps {
  variant?: LeadFormVariant;
  transparent?: boolean;
  onSubmitted?: () => void;
}

const LeadForm = ({
  variant = "full",
  transparent = false,
  onSubmitted,
}: LeadFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Required fields missing",
        description: "Please enter your name and phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      property_project_name: "Ocus Medley",
    };

    sessionStorage.setItem("pendingLead", JSON.stringify(payload));
    navigate("/thank-you");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    if (onSubmitted) onSubmitted();
    setIsSubmitting(false);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const FormCard = (
    <Card
      className={cn(
        "rounded-2xl shadow-xl border border-gray-100 bg-white/95 backdrop-blur-lg",
        transparent ? "bg-background/50 border-white/20" : ""
      )}
    >
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-bold">
          <span className="text-black">Book Your </span>
          <span className="text-[#F77714]">Site Visit</span>
        </CardTitle>

        <CardDescription className="text-sm text-gray-600">
          Get brochure, pricing & availability.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <Label className="flex items-center gap-2 text-sm font-medium">
              <User size={16} className="text-[#F77714]" />
              Full Name *
            </Label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="mt-2 h-10 rounded-lg border-gray-200 focus:border-[#F77714] focus:ring-[#F77714]"
            />
          </div>

          {/* Phone */}
          <div>
            <Label className="flex items-center gap-2 text-sm font-medium">
              <Phone size={16} className="text-[#F77714]" />
              Phone Number *
            </Label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
              className="mt-2 h-10 rounded-lg border-gray-200 focus:border-[#F77714] focus:ring-[#F77714]"
            />
          </div>

          {/* Email */}
          <div>
            <Label className="flex items-center gap-2 text-sm font-medium">
              <Mail size={16} className="text-[#F77714]" />
              Email Address
            </Label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="mt-2 h-10 rounded-lg border-gray-200 focus:border-[#F77714] focus:ring-[#F77714]"
            />
          </div>

          {/* Message */}
          <div>
            <Label className="flex items-center gap-2 text-sm font-medium">
              <MessageSquare size={16} className="text-[#F77714]" />
              Preferred Visit Date/Best time to Connect            </Label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={2}
              className="mt-2 rounded-lg border-gray-200 focus:border-[#F77714] focus:ring-[#F77714]"
            />
          </div>

          {/* CTA */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-[#F77714] to-orange-500 hover:opacity-90 transition-all duration-300"
          >
            {isSubmitting ? "Submitting..." : "Request Callback"}
          </Button>

        </form>
      </CardContent>
    </Card>
  );

  if (variant === "compact") return FormCard;

  return (
    <section id="contact" className="py-24 bg-gray-50">

      <div className="container mx-auto px-4">

        {/* Premium Project Intro */}
        <div className="max-w-5xl mx-auto text-center mb-16 bg-white rounded-3xl shadow-xl p-10 border border-gray-100">

          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            <span className="text-black">OCUS MEDLEY</span>
            <span className="text-[#F77714]"> – The Medley of Good Times</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 font-medium mb-4">
            Shop. Work. Dine. Entertain. Experience It All.
          </p>

          <div className="inline-block bg-orange-50 text-[#F77714] px-5 py-2 rounded-full text-sm font-semibold mb-5">
            📍 Sector 99, Dwarka Expressway, Gurugram
          </div>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Connect with us today for leasing and investment opportunities and
            secure your space in{" "}
            <span className="font-semibold text-gray-800">
              Gurugram’s next iconic commercial destination.
            </span>
          </p>

        </div>

        {/* Site Visit CTA */}
        <div className="max-w-3xl mx-auto text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Schedule Your <span className="text-[#F77714]">Site Visit</span>
          </h2>

          <p className="text-gray-600 text-lg">
            Connect with our property experts to get pricing, availability and
            investment insights for OCUS Medley.
          </p>

        </div>

        {/* Form */}
        <div className="max-w-md mx-auto">
          {FormCard}
        </div>

      </div>

    </section>
  );
};

export default LeadForm;