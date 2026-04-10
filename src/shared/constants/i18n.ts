/**
 * Интернационализация и константы текста
 * Используется вместо hardcoded строк в компонентах
 */

export const SEARCH_MESSAGES = {
    SEARCHING: 'Поиск...',
    ENTER_QUERY: 'Введите запрос',
    NO_RESULTS: 'Ничего не найдено',
    SEARCH_RESULTS: 'Результаты поиска:',
} as const;

export const FILM_LABELS = {
    SIMILAR_FILMS: 'Похожие фильмы',
    DIRECTORS: 'Режиссеры',
    ACTORS: 'Актеры',
    NOT_SPECIFIED: 'Не указаны',
    DESCRIPTION: 'Описание',
    LOAD_ERROR: 'Ошибка при загрузке данных',
    PLAYER_TITLE: 'Трейлер',
    LOGO_ALT: 'Логотип',
} as const;
