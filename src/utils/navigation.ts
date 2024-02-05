import { DictionaryType } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export function getNavigation({ locale }: { locale: Locale }) {
  return {
    home: { url: `/${locale}` },
    bio: {
      url: `/${locale}/bio`,
    },
    music: {
      url: `/${locale}/music`,
    },
    videos: {
      url: `/${locale}/videos`,
    },
    contact: {
      url: `/${locale}/contact`,
    },
    privacyPolicy: {
      url: `/${locale}/privacy-policy`,
    },
  };
}

export function getMenuItems(locale: Locale, dictionary: DictionaryType) {
  const navigation = getNavigation({ locale });

  return {
    home: {
      id: "home",
      name: dictionary.navigation.home,
      url: navigation.home.url,
    },
    bio: {
      id: "bio",
      name: dictionary.navigation.bio,
      url: navigation.bio.url,
    },
    music: {
      id: "music",
      name: dictionary.navigation.music,
      url: navigation.music.url,
    },
    videos: {
      id: "videos",
      name: dictionary.navigation.videos,
      url: navigation.videos.url,
    },
    contact: {
      id: "contact",
      name: dictionary.navigation.contact,
      url: navigation.contact.url,
    },
  };
}

export function getMenuItemsList({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: DictionaryType;
}) {
  const navigation = getMenuItems(locale, dictionary);

  return Object.values(navigation);
}
