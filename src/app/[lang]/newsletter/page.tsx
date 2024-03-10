import React from "react";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Newsletter } from "../_components";
import { getNavigation } from "@/utils";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const navigation = getNavigation({ locale: lang });

  return (
    <div>
      <section>
        <Newsletter
          copy={dictionary.newsletter}
          privacyPolicyUrl={navigation.privacyPolicy.url}
        />
      </section>
    </div>
  );
}
