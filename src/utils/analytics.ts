/**
 * GA4 Event Tracking Utility
 * Dispatches 'phone_click' and 'whatsapp_click' with 'ubicacion' parameter.
 */

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set' | 'js',
      action: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export type EventLocation =
  | 'nav'
  | 'hero'
  | 'servicio_casa'
  | 'servicio_auto'
  | 'servicio_llave_chip'
  | 'servicio_chapa'
  | 'como_funciona'
  | 'por_que'
  | 'zonas'
  | 'faq'
  | 'cta_final'
  | 'barra_movil'
  | 'flotante';

export function trackPhoneClick(location: EventLocation) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'phone_click', {
      ubicacion: location,
      method: 'tel:+523319437616',
    });
  }
}

export function trackWhatsAppClick(location: EventLocation) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', {
      ubicacion: location,
      channel: 'whatsapp',
    });
  }
}
