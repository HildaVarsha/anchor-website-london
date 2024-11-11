"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Button, Card, Input, Textarea } from "../ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loader2 } from "lucide-react";
import { sendEmail } from "../core/sendMail";
import { useToast } from "@/hooks/use-toast";

type TForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

// Validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

const ContactUsForm = ({
  setIsOpen,
}: {
  setIsOpen?: (open: boolean) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: TForm) => {
    setLoading(true);

    const response = await sendEmail({
      name: data?.name,
      email: data?.email,
      content: data?.message,
    });
    if (response == "success") {
      setLoading(false);
      setIsOpen?.(false);
      reset();
      toast({
        title: "Thank you for contacting us!",
        description: "Our team will contact you within 3 working days",
      });
    } else {
      setLoading(false);
      setIsOpen?.(false);
      reset();
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again later!",
      });
    }
    console.log(response, "response");
  };

  return (
    <Card className="rounded-md p-8 h-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Input
            placeholder="Name"
            className={`h-12 ${errors.name ? "border-red-500" : ""}`}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm pt-2">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <Input
            placeholder="Email"
            className={`h-12 ${errors.email ? "border-red-500" : ""}`}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm pt-2">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <Input
            placeholder="Phone"
            className={`h-12 ${errors.phone ? "border-red-500" : ""}`}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm pt-2">{errors.phone.message}</p>
          )}
        </div>

        <div className="mb-4">
          <Textarea
            placeholder="Your Message"
            className={`h-44 ${errors.message ? "border-red-500" : ""}`}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-red-500 text-sm pt-2">
              {errors.message.message}
            </p>
          )}
        </div>
        <Button type="submit" className="my-4" disabled={loading}>
          {loading && <Loader2 className="animate-spin" />}
          Send Now
        </Button>
      </form>
    </Card>
  );
};

export default ContactUsForm;
