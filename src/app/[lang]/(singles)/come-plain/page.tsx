import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

type PropsType = {
  params: { lang: Locale };
};

export default async function ComePlainPage({ params }: PropsType) {
  const dictionary = await getDictionary(params.lang);

  return (
    <main>
      <h1>Come Plain Page</h1>
      {/* Add your content here */}
    </main>
  );
}
