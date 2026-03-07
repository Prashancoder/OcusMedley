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

    if (!API_URL) {
      toast({
        title: "Configuration error",
        description: "API URL is not configured properly.",
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
        "rounded-xl shadow-lg border bg-white/90 backdrop-blur-xl",
        transparent ? "bg-background/50 border-white/20" : ""
      )}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold text-black">
          Book Your Site Visit
        </CardTitle>
        <CardDescription className="text-sm text-gray-600">
          Get brochure, pricing & availability.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="space-y-3">

          <div>
            <Label className="flex items-center gap-2 text-sm font-medium">
              <User size={14} />
              Full Name *
            </Label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="mt-1 h-9 text-sm rounded-md"
            />
          </div>

          <div>
            <Label className="flex items-center gap-2 text-sm font-medium">
              <Phone size={14} />
              Phone Number *
            </Label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
              className="mt-1 h-9 text-sm rounded-md"
            />
          </div>

          <div>
            <Label className="flex items-center gap-2 text-sm font-medium">
              <Mail size={14} />
              Email Address
            </Label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="mt-1 h-9 text-sm rounded-md"
            />
          </div>

          <div>
            <Label className="flex items-center gap-2 text-sm font-medium">
              <MessageSquare size={14} />
              Preferred Visit Date
            </Label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={2}
              className="mt-1 text-sm rounded-md"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 text-sm font-semibold rounded-md text-white bg-black hover:opacity-90"
          >
            {isSubmitting ? "Submitting..." : "Request Callback"}
          </Button>

        </form>
      </CardContent>
    </Card>
  );

  if (variant === "compact") return FormCard;

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-black">
            Schedule Your Site Visit
          </h2>
          <p className="text-gray-600 mt-3">
            Connect with us for premium commercial investment opportunities at
            OCUS Medley, Sector 99, Gurugram
          </p>
        </div>

        <div className="max-w-sm mx-auto">{FormCard}</div>
      </div>
    </section>
  );
};

export default LeadForm;