import { z } from "zod";

export const BUDGET_LABELS = {
  under5: "Under $5K",
  "5to10": "$5K – $10K",
  "10to20": "$10K – $20K",
  "20to50": "$20K – $50K",
  "50to100": "$50K – $100K",
  "100plus": "$100K+",
} as const;

export type Budget = keyof typeof BUDGET_LABELS;

export const budgetLabel = (value: string) =>
  BUDGET_LABELS[value as Budget] ?? value;

export const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Required").max(120),
  email: z.string().trim().email("Valid email required").max(200),
  companyWebsite: z.string().trim().min(1, "Required").max(300),
  budget: z.enum(
    Object.keys(BUDGET_LABELS) as [Budget, ...Budget[]],
    "Select a budget",
  ),
  message: z.string().trim().min(1, "Required").max(5000),
  // Honeypot: real people never see this field, so it should stay empty.
  // Deliberately permissive — rejecting a filled value here would fail the
  // whole parse and tell the bot exactly which field caught it. The route
  // checks it after parsing and discards the submission silently instead.
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const SUBMISSION_STATUSES = ["new", "read", "archived"] as const;
export type SubmissionStatus = (typeof SUBMISSION_STATUSES)[number];

export const statusSchema = z.object({
  status: z.enum(SUBMISSION_STATUSES),
});
