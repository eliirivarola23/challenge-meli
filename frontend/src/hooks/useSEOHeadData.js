import { useEffect, useRef } from 'react';

export const useSEOHeadData = ({ title }) => {
  const prevTitle = useRef(document.title);
  const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'));

  useEffect(() => {
    const previousTitle = prevTitle.current;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = prevDescription.current;

    if (title && title !== previousTitle) {
      const newTitle = `${title.charAt(0).toUpperCase()}${title.slice(1)}`;
      document.title = `${newTitle} | MercadoLibre 📦`;
      metaDescription.setAttribute(
        'content',
        `Comprá ${newTitle} en cuotas sin interés! Conocé nuestras increíbles ofertas y promociones en millones de productos.`
      );
    }

    return () => {
      document.title = previousTitle;
      metaDescription.setAttribute('content', previousDescription);
    };
  }, [title]);
};
