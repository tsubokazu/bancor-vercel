export const useCookieConsentStore = defineStore('cookieConsent', () => {
  const consent = ref(null as boolean | null);

  function giveConsent() {
    console.log(`giveConsent: ${consent.value}`);
    consent.value = true;
    localStorage.setItem('cookie_consent', 'true');
  }

  function disableCookies() {
    console.log(`disableCookies: ${consent.value}`);
    consent.value = false;
    localStorage.setItem('cookie_consent', 'false');
  }

  function checkConsent() {
    console.log(`checkConsent: ${consent.value}`);
    const consentValue = localStorage.getItem('cookie_consent');
    consent.value =
      consentValue === 'true' ? true : consentValue === 'false' ? false : null;
  }

  return {
    consent,
    giveConsent,
    disableCookies,
    checkConsent,
  };
});
