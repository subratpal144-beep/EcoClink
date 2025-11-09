import { z } from "zod";

// Contact form submission
export const contactSubmissionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;

export interface ContactSubmissionWithId extends ContactSubmission {
  id: string;
  timestamp: string;
}

// Product data
export interface Product {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  imageUrl: string;
}

// Visitor counter
export interface VisitorStats {
  count: number;
}
