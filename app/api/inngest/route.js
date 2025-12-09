import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdate } from "@/config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdate,
<<<<<<< HEAD
    syncUserDeletion,
=======
    syncUserDeletion
>>>>>>> e23eb9ba502a25a5bbe3a8c2cbaea51051c75502
  ],
});