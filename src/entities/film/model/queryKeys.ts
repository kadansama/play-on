/**
 * Query Key Factory для filmAbout запросов
 * Используется для правильной иерархической организации ключей в React Query
 */

export const filmAboutKeys = {
  // Основной уровень для всех запросов фильма
  all: ['filmAbout'] as const,
  
  // Все запросы для конкретного фильма
  details: (id: number) => [...filmAboutKeys.all, 'details', id] as const,
  
  // Основная информация о фильме
  movieInfo: (id: number) => [...filmAboutKeys.details(id), 'movieInfo'] as const,
  
  // Информация о актерах
  actors: (id: number) => [...filmAboutKeys.details(id), 'actors'] as const,
  
  // Информация о режиссерах
  directors: (id: number) => [...filmAboutKeys.details(id), 'directors'] as const,
  
  // Трейлер
  trailer: (id: number) => [...filmAboutKeys.details(id), 'trailer'] as const,
  
  // Похожие фильмы
  similar: (id: number) => [...filmAboutKeys.details(id), 'similar'] as const,
} as const;
