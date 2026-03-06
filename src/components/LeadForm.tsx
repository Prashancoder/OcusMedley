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

    // Store form data in sessionStorage for background submission
    sessionStorage.setItem('pendingLead', JSON.stringify(payload));

    // Navigate to thank you page immediately
    navigate('/thank-you');

    // Reset form
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
        "rounded-2xl shadow-xl border bg-white/90 backdrop-blur-xl transition hover:shadow-2xl",
        transparent ? "bg-background/50 border-white/20" : ""
      )}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-black">
          Book Your Site Visit
        </CardTitle>
        <CardDescription className="text-base text-gray-600">
          Fill in your details to receive brochure, pricing & availability.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label className="flex items-center gap-2 font-semibold">
              <User size={16} />
              Full Name *
            </Label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder=""
              required
              className="mt-2 rounded-lg"
            />
          </div>

          <div>
            <Label className="flex items-center gap-2 font-semibold">
              <Phone size={16} />
              Phone Number *
            </Label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder=""
              required
              className="mt-2 rounded-lg"
            />
          </div>

          <div>
            <Label className="flex items-center gap-2 font-semibold">
              <Mail size={16} />
              Email Address
            </Label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder=""
              className="mt-2 rounded-lg"
            />
          </div>

          <div>
            <Label className="flex items-center gap-2 font-semibold">
              <MessageSquare size={16} />
              Preferred Visit Date/Best time to Connect
                          </Label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder=" "
              rows={3}
              className="mt-2 rounded-lg"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 text-lg font-semibold rounded-lg text-white bg-black hover:opacity-90"
          >
            {isSubmitting ? "Submitting..." : "✨ Request Callback"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );

  if (variant === "compact") return FormCard;

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-black">
            Schedule Your Site Visit
          </h2>
          <p className="text-gray-600 mt-4">
            Connect with Us for premium independent floors in
            Sector 51, Gurugram.
          </p>
        </div>

        <div className="max-w-md mx-auto">{FormCard}</div>
      </div>
    </section>
  );
};

export default LeadForm;