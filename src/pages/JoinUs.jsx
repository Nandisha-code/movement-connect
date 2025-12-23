/**
 * Join Us Page Component
 * Membership and volunteer signup form with client-side validation
 */

import { useState } from 'react';
import { CheckCircle, Users, Heart, Megaphone, Shield } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const JoinUs = ({ organization }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: organization.id,
    membershipType: 'member',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Mock submission - no backend
      setIsSubmitted(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const benefits = [
    { icon: Users, title: 'Community', desc: 'Join a network of like-minded individuals' },
    { icon: Megaphone, title: 'Voice', desc: 'Amplify your voice on issues that matter' },
    { icon: Heart, title: 'Impact', desc: 'Make real change in your community' },
    { icon: Shield, title: 'Support', desc: 'Get support for your rights' },
  ];

  if (isSubmitted) {
    return (
      <main className="pt-20 min-h-screen flex items-center">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center py-20 animate-scale-in">
            <div className="w-20 h-20 rounded-full hero-gradient flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-primary-foreground" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Welcome to {organization.shortName}!
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Thank you for joining the movement, {formData.name}! We've received your 
              application and will contact you shortly at {formData.email}.
            </p>
            <p className="text-primary font-display text-xl">
              "{organization.tagline}"
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-6xl text-background mb-6 animate-fade-up">
            Join {organization.shortName}
          </h1>
          <p className="text-xl text-background/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Become part of India's largest {organization.id === 'aisf' ? 'student' : 'youth'} movement 
            and help shape a better future.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionTitle
            subtitle="Why Join"
            title="Benefits of Membership"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="bg-card p-6 rounded-xl border border-border text-center card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full hero-gradient flex items-center justify-center mx-auto mb-4">
                  <benefit.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <SectionTitle
              subtitle="Registration"
              title="Fill Out the Form"
            />
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block font-semibold text-foreground mb-2">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                    errors.name ? 'border-destructive' : 'border-border'
                  }`}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block font-semibold text-foreground mb-2">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                    errors.email ? 'border-destructive' : 'border-border'
                  }`}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block font-semibold text-foreground mb-2">
                  Phone Number <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your 10-digit phone number"
                  className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                    errors.phone ? 'border-destructive' : 'border-border'
                  }`}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-2 text-sm text-destructive">{errors.phone}</p>
                )}
              </div>

              {/* Organization Selector */}
              <div>
                <label htmlFor="organization" className="block font-semibold text-foreground mb-2">
                  Organization
                </label>
                <select
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                >
                  <option value="aisf">AISF - All India Students' Federation</option>
                  <option value="aiyf">AIYF - All India Youth Federation</option>
                </select>
              </div>

              {/* Membership Type */}
              <div>
                <label className="block font-semibold text-foreground mb-3">
                  I want to
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: 'member', label: 'Become a Member' },
                    { value: 'volunteer', label: 'Volunteer' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center justify-center gap-2 p-4 rounded-lg border cursor-pointer transition-all ${
                        formData.membershipType === option.value
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="membershipType"
                        value={option.value}
                        checked={formData.membershipType === option.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className="font-medium">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block font-semibold text-foreground mb-2">
                  Why do you want to join? (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about yourself and why you want to join..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-primary text-lg py-4"
              >
                Submit Application
              </button>

              <p className="text-center text-sm text-muted-foreground">
                By joining, you agree to uphold the values and principles of {organization.shortName}.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JoinUs;
