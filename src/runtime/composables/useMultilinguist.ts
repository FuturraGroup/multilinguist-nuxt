import type {TranslationMap, TMultilinguistResponse} from "./useLocalization";
import {useNuxtApp} from "nuxt/app";

export default function useMultilinguist() {
  const nuxtApp = useNuxtApp();
  const localization = (nuxtApp.$localization || nuxtApp._localization) as TMultilinguistResponse<TranslationMap>;

  if (!localization) {
    throw new Error("Localization plugin not initialized");
  }

  return {...localization};
}
