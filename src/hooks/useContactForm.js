import { useState } from "react";

export const useContactForm = (formspreeId) => {
  const [status, setStatus] = useState("idle");

  const sendData = async (data, captchaToken) => {
    if (!captchaToken) {
      alert("Seguridad: Complete la verificación anti-bot.");
      return false;
    }

    setStatus("sending");

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          ...data, 
          "cf-turnstile-response": captchaToken 
        }),
      });

      if (response.ok) {
        setStatus("success");
        return true;
      } else {
        setStatus("error");
        return false;
      }
    } catch (error) {
      setStatus("error");
      return false;
    }
  };

  const resetStatus = () => setStatus("idle");

  return { sendData, status, resetStatus };
};