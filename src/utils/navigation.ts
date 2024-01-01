import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export function getNavigation(
  locale: Locale,
  dictionary: Awaited<ReturnType<typeof getDictionary>>
) {
  return {
    home: { id: "home", name: dictionary.navigation.home, url: `/${locale}` },
    bio: {
      id: "bio",
      name: dictionary.navigation.bio,
      url: "bio",
    },
    music: {
      id: "music",
      name: dictionary.navigation.music,
      url: "music",
    },
    videos: {
      id: "videos",
      name: dictionary.navigation.videos,
      url: "videos",
    },
    contact: {
      id: "contact",
      name: dictionary.navigation.contact,
      url: "contact",
    },
  };
}

export function getNavigationList(
  locale: Locale,
  dictionary: Awaited<ReturnType<typeof getDictionary>>
) {
  const navigation = getNavigation(locale, dictionary);

  return Object.values(navigation).filter((n) => n.id !== "home");
}
