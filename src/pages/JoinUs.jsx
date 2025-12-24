/**
 * Join Us Page Component
 * Membership and volunteer signup form with client-side validation
 */

import { useState } from "react";
import { CheckCircle, Users, Heart, Megaphone, Shield } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const JoinUs = ({ organization }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: organization.id,
    membershipType: "member",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 🔥 Dynamic gradient (AISF = Red, AIYF = Blue)
  const gradient =
    organization.id === "aisf"
      ? "bg-gradient-to-br from-red-800 via-red-700 to-red-600"
      : "bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600";

  const softGradient =
    organization.id === "aisf"
      ? "from-red-500/20 to-red-300/10"
      : "from-blue-500/20 to-blue-300/10";

  const glow =
    organization.id === "aisf"
      ? "drop-shadow-[0_0_16px_rgba(220,38,38,0.5)]"
      : "drop-shadow-[0_0_16px_rgba(37,99,235,0.5)]";

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.length < 2)
      newErrors.name = "Name must be at least 2 characters";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, "")))
      newErrors.phone = "Please enter a valid 10-digit phone number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setIsSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const benefits = [
    { icon: Users, title: "Community", desc: "Join a powerful national network" },
    { icon: Megaphone, title: "Voice", desc: "Raise your voice on vital issues" },
    { icon: Heart, title: "Impact", desc: "Create real social change" },
    { icon: Shield, title: "Support", desc: "Stand protected and united" },
  ];

  /* ---------------- SUCCESS STATE ---------------- */
  if (isSubmitted) {
    return (
      <main className="pt-20 min-h-screen flex items-center">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center py-24 animate-scale-in">
            <div
              className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 ${gradient} ${glow}`}
            >
              <CheckCircle size={48} className="text-background" />
            </div>

            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Welcome to {organization.shortName}!
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              Thank you for joining the movement,{" "}
              <span className="font-semibold">{formData.name}</span>.  
              We’ll reach out soon at{" "}
              <span className="font-semibold">{formData.email}</span>.
            </p>

            <p className="text-primary font-display text-xl">
              “{organization.tagline}”
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* PAGE HEADER */}
      <section className={`relative py-20 md:py-32 overflow-hidden ${gradient}`}>
        <div className="absolute -top-20 right-10 w-96 h-96 bg-background/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-background/10 rounded-full blur-3xl" />

        <div className="container-custom text-center relative z-10">
          <h1 className="font-display text-4xl md:text-6xl text-background mb-6 animate-fade-up">
            Join {organization.shortName}
          </h1>
          <p
            className="text-xl text-background/80 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Become part of India’s largest{" "}
            {organization.id === "aisf" ? "student" : "youth"} movement and help
            shape a better future.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionTitle subtitle="Why Join" title="Benefits of Membership" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="bg-card p-6 rounded-xl border border-border
                           text-center transition-all
                           hover:-translate-y-1 hover:shadow-xl
                           animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center
                              justify-center mx-auto mb-4 ${gradient}`}
                >
                  <b.icon size={24} className="text-background" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">
                  {b.title}
                </h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <SectionTitle subtitle="Registration" title="Fill Out the Form" />

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {[
                { label: "Full Name", name: "name", type: "text", required: true },
                { label: "Email Address", name: "email", type: "email", required: true },
                { label: "Phone Number", name: "phone", type: "tel", required: true },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block font-semibold mb-2">
                    {f.label} {f.required && <span className="text-primary">*</span>}
                  </label>
                  <input
                    type={f.type}
                    name={f.name}
                    value={formData[f.name]}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-background
                                focus:outline-none focus:ring-2 focus:ring-primary
                                transition-all ${
                                  errors[f.name] ? "border-destructive" : "border-border"
                                }`}
                  />
                  {errors[f.name] && (
                    <p className="mt-1 text-sm text-destructive">{errors[f.name]}</p>
                  )}
                </div>
              ))}

              {/* MEMBERSHIP TYPE */}
              <div>
                <label className="block font-semibold mb-3">I want to</label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "member", label: "Become a Member" },
                    { value: "volunteer", label: "Volunteer" },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className={`p-4 rounded-lg border cursor-pointer text-center
                                  transition-all ${
                                    formData.membershipType === opt.value
                                      ? "border-primary bg-primary/10 text-primary"
                                      : "border-border hover:border-primary/50"
                                  }`}
                    >
                      <input
                        type="radio"
                        name="membershipType"
                        value={opt.value}
                        checked={formData.membershipType === opt.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className="font-medium">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block font-semibold mb-2">
                  Why do you want to join? (Optional)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border
                             resize-none focus:outline-none focus:ring-2
                             focus:ring-primary transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full text-lg py-4
                           bg-primary text-primary-foreground
                           font-semibold rounded-lg
                           hover:bg-primary/90 transition-all"
              >
                Submit Application
              </button>

              <p className="text-center text-sm text-muted-foreground">
                By joining, you agree to uphold the values of {organization.shortName}.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JoinUs;
