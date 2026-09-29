"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { GoogleButton } from "@/components/google-button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupSchema } from "@/zod/signup";

export function SignupForm({ className }: React.ComponentProps<"form">) {
  const form = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: SignupSchema) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-6", className)}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Crie sua conta</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Preencha seus dados para criar sua conta
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Nome</FieldLabel>
          <Input
            id="name"
            type="text"
            {...form.register("name")}
            placeholder="Ex: João Paulo"
            autoComplete="off"
          />
          {form.formState.errors.name && (
            <FieldDescription className="text-red-500">
              {form.formState.errors.name.message}
            </FieldDescription>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            {...form.register("email")}
            placeholder="email@exemplo.com"
            autoComplete="off"
          />
          {form.formState.errors.email && (
            <FieldDescription className="text-red-500">
              {form.formState.errors.email.message}
            </FieldDescription>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Senha</FieldLabel>
          <Input
            id="password"
            type="password"
            autoComplete="off"
            {...form.register("password")}
          />
          {form.formState.errors.password && (
            <FieldDescription className="text-red-500">
              {form.formState.errors.password.message}
            </FieldDescription>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirme sua Senha</FieldLabel>
          <Input
            id="confirm-password"
            type="password"
            {...form.register("confirmPassword")}
            autoComplete="off"
          />
          {form.formState.errors.confirmPassword && (
            <FieldDescription className="text-red-500">
              {form.formState.errors.confirmPassword.message}
            </FieldDescription>
          )}
        </Field>
        <Field>
          <Button type="submit">Crie sua conta</Button>
        </Field>
        <FieldSeparator>Ou continue com</FieldSeparator>
        <Field>
          <GoogleButton>Criar conta com Google</GoogleButton>
          <FieldDescription className="px-6 text-center">
            Já tem uma conta? <Link href="/login">Faça login</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
