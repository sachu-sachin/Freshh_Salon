import React, { useState } from "react";
// Import shadcn/ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import AnimatedBackground from "./AnimatedBackground";

const AppointmentForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <section id="appointment" className="w-full flex justify-center items-center py-10 px-2 mt-10 scroll-mt-16 relative">
      <AnimatedBackground />
      <Card className="w-full max-w-md shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold mb-2">Book an Appointment</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="transition-shadow focus:shadow-outline"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@email.com"
                className="transition-shadow focus:shadow-outline"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="transition-shadow focus:shadow-outline"
              />
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="transition-shadow focus:shadow-outline"
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  className="transition-shadow focus:shadow-outline"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="service">Service</Label>
              <Input
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                placeholder="e.g. Haircut, Facial"
                className="transition-shadow focus:shadow-outline"
              />
            </div>
            <Button type="submit" className="mt-2 w-full relative overflow-hidden">
              {submitted ? (
                <span className="animate-pulse">Booked!</span>
              ) : (
                <span>Book Now</span>
              )}
              {/* Micro-interaction: ripple effect */}
              <span className="absolute inset-0 pointer-events-none" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default AppointmentForm;
