const MAILER_LITE_API_URL = "https://connect.mailerlite.com/api/subscribers";

type SaveSubscriberReturnType =
  | {
      status: number;
      statusText: "already_subscribed" | "created";
    }
  | { status: number; statusText: "error"; error: string };

export async function saveSubscriber({
  email,
  hasOptedIn,
}: {
  email: string;
  hasOptedIn: boolean;
}): Promise<SaveSubscriberReturnType> {
  try {
    const result = await fetch(MAILER_LITE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MAILER_LITE_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        status: "active",
        subscribed_at: getFormattedDate(new Date()),
        opted_in: hasOptedIn ? getFormattedDate(new Date()) : undefined,
        groups: [process.env.NEXT_PUBLIC_MAILER_LITE_NEWSLETTER_GROUP_ID],
      }),
    });

    if (result.status === 200) {
      return { status: result.status, statusText: "already_subscribed" };
    } else if (result.status === 201) {
      return { status: result.status, statusText: "created" };
    } else {
      return {
        status: result.status,
        statusText: "error",
        error: result.statusText,
      };
    }
  } catch (e) {
    return { status: 500, statusText: "error", error: JSON.stringify(e) };
  }
}

function getFormattedDate(date: Date): string {
  const year = date.getUTCFullYear();
  const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
  const day = ("0" + date.getUTCDate()).slice(-2);
  const hours = ("0" + date.getUTCHours()).slice(-2);
  const minutes = ("0" + date.getUTCMinutes()).slice(-2);
  const seconds = ("0" + date.getUTCSeconds()).slice(-2);

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
