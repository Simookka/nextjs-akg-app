import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";

export async function PATCH() {
  try {
    const { user } = await validateRequest();

    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    await prisma.notification.updateMany({
      where: {
        recipientId: user.id,
        read: false,
      },
      data: {
        read: true,
      },
    });

    return new Response();
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}


/* A patch funtcion is basically the same as a POST function, but its more idiomatic to use when updating server data.
Another important thing is that we use a route handler instead of a server action, because this operation is supposed to run silently
in the background, and server action block navigation for the user on the client side, which would be bad user experience.
This way this runs in the background (the notifiacions get marked as read) while the user can keep navigating. */