'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export interface PublicContent {
  locales: Record<string, string>;
  services: Array<{
    key: string;
    icon: string;
    title: string;
    description: string;
  }>;
  portfolio: Array<{
    key: string;
    title: string;
    description: string;
    image: string;
    categoryKey: string;
    technologies: string[];
    contentEn: string | null;
    contentVn: string | null;
  }>;
  team: Array<{
    name: string;
    role: string;
    bio: string;
    avatar: string;
    level: number;
    top?: string;
    right?: string;
    size?: number;
    delay?: number;
  }>;
  company: {
    name: string;
    tagline: string;
    email: string;
    phone: string;
    address: string;
    images: {
      office: string;
      team: string;
    };
    stats: Array<{
      key: string;
      label: string;
      value: string;
      detail?: string;
    }>;
  } | null;
  technologies: Array<{
    name: string;
    category: string;
    icon?: string;
  }>;
  stats: Array<{
    key: string;
    label: string;
    value: string;
    detail?: string;
  }>;
}

export function useContent() {
  const { i18n } = useTranslation();
  const [content, setContent] = useState<PublicContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      try {
        const lang = i18n.language || 'en';
        const response = await fetch(`/api/content?lang=${lang}`);
        if (!response.ok) {
          throw new Error('Failed to fetch content');
        }
        const data = await response.json();
        
        // Inject backend locales into i18next
        if (data.locales) {
          Object.entries(data.locales).forEach(([key, value]) => {
            // Split keys like 'hero.title' to support nesting if needed, 
            // but i18next usually handles flat keys with dots fine if passed correctly
            i18n.addResource(lang, 'translation', key, value as string);
          });
        }

        setContent(data);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [i18n.language]);

  return { content, loading, error };
}
