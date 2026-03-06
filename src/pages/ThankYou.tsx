import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Home, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ThankYou = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    // Get form data from sessionStorage (stored before navigation)
    const formData = sessionStorage.getItem('pendingLead');
    const apiUrl = import.meta.env.VITE_API_URL;

    if (formData && apiUrl) {
      const submitLeadInBackground = async () => {
        try {
          const leadData = JSON.parse(formData);
          
          const res = await fetch(`${apiUrl}/api/lead`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(leadData),
          });

          if (!res.ok) {
            throw new Error(`Backend error: ${res.status}`);
          }

          const data = await res.json();
          
          if (data?.success) {
            setLeadSubmitted(true);
            // Clear the stored data
            sessionStorage.removeItem('pendingLead');
          } else {
            throw new Error("Lead submission failed");
          }
        } catch (error) {
          console.error("Background lead submission error:", error);
          setSubmitError(true);
          
          toast({
            title: "Submission failed",
            description: "Please try again or call 9971809303 directly.",
            variant: "destructive",
          });
        }
      };

      submitLeadInBackground();
    } else {
      // If no form data, mark as submitted (user might have refreshed)
      setLeadSubmitted(true);
    }
  }, [toast]);

  const handleGoHome = () => {
    navigate("/");
  };

  const handleCallNow = () => {
    window.location.href = "tel:9971809303";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4 py-12">
      <Card className="max-w-2xl w-full rounded-2xl shadow-xl border-0 bg-white/95 backdrop-blur-xl">
        <CardHeader className="text-center pb-8">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
            Thank You! 🎉
          </CardTitle>
        </CardHeader>

        <CardContent className="text-center space-y-6">
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              Your request has been received. Our team will contact you shortly.
            </p>
            
            {!leadSubmitted && !submitError && (
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                <span>Processing your request...</span>
              </div>
            )}
            
            {leadSubmitted && (
              <div className="flex items-center justify-center gap-2 text-sm text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span>Request processed successfully</span>
              </div>
            )}
            
            {submitError && (
              <div className="flex items-center justify-center gap-2 text-sm text-red-600">
                <span>There was an issue processing your request</span>
              </div>
            )}
          </div>

          <div className="bg-gray-50 rounded-xl p-6 space-y-4">
            <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <p className="text-sm text-gray-600">Our team receives your request</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <p className="text-sm text-gray-600">We review your requirements</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-blue-600 font-semibold">3</span>
                </div>
                <p className="text-sm text-gray-600">We contact you within 24 hours</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              onClick={handleGoHome}
              className="flex-1 py-3 px-6 rounded-lg bg-black hover:bg-gray-800 text-white font-medium flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
            <Button
              onClick={handleCallNow}
              variant="outline"
              className="flex-1 py-3 px-6 rounded-lg border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-medium flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </div>

          <div className="text-sm text-gray-500 pt-4 border-t">
            <p>Need immediate assistance? Call us at <strong>9971809303</strong></p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThankYou;
