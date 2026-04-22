# Play On

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=111)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=fff)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=fff)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-5-FF4154?style=for-the-badge&logo=reactquery&logoColor=fff)

**Play On** - pet-проект онлайн-кинотеатра с каталогом фильмов и сериалов, поиском, подборками, фильтрами, страницей фильма и личным профилем. Проект создавался как практическая фронтенд-платформа для отработки архитектуры React-приложения, работы с внешним API, кеширования данных и адаптивного интерфейса.

## О проекте

Идея проекта - сделать удобный интерфейс для поиска и выбора фильмов: пользователь может просматривать подборки, искать фильмы по названию, фильтровать каталог, открывать подробную страницу фильма и переходить в разделы профиля.

Практическая направленность проекта в том, что он решает понятную пользовательскую задачу: помогает быстрее найти фильм или сериал по интересам, посмотреть основную информацию, рейтинг, описание, трейлер и похожие фильмы.

## Возможности

- Главная страница с каруселями фильмов и визуальными подборками.
- Каталоги фильмов и сериалов с фильтрацией по жанру, стране, году и другим параметрам.
- Поиск фильмов по ключевому слову с debounce, чтобы не отправлять лишние запросы.
- Страница фильма с описанием, рейтингом, постером, трейлером, актерами, режиссерами и похожими фильмами.
- Раздел подборок и отдельные страницы коллекций.
- Профиль пользователя, избранное, просмотренное и подключенные устройства.
- Адаптивный интерфейс: отдельные элементы навигации для desktop и mobile.
- Кеширование запросов через TanStack Query и сохранение части кеша в IndexedDB.
- Serverless-прокси для безопасной работы с Kinopoisk API без раскрытия API-ключа на клиенте.

## Стек

| Категория | Технологии |
| --- | --- |
| Frontend | React 19, TypeScript, Vite |
| Роутинг | React Router |
| Данные | TanStack Query, Persist Query Client, IndexedDB |
| UI | CSS Modules, MUI Icons, React Slick |
| API | Kinopoisk API через serverless endpoint |
| Тесты | Vitest, Testing Library |
| Инструменты | ESLint, Prettier, SVGO |

## Архитектура

Проект разделен на смысловые слои:

```text
src/
├── app/        # инициализация приложения, роутинг, провайдеры, глобальные стили
├── pages/      # страницы: home, movies, series, profile, filmAbout, top
├── widgets/    # крупные блоки интерфейса: Header, Footer, карусели, панели
├── features/   # пользовательские сценарии: поиск, фильтры, профиль, меню
├── entities/   # бизнес-сущности и API-модели: film, collections, queries
└── shared/     # переиспользуемые UI-компоненты, API-клиент, типы, assets
```

Такое разделение помогает держать код читаемым: страницы собирают сценарии, features отвечают за интерактивность, entities инкапсулируют работу с данными, а shared содержит базовые строительные блоки.

## Работа с API

Клиент не обращается к Kinopoisk API напрямую. В dev-режиме запросы проходят через Vite proxy, а для production-окружения предусмотрен serverless endpoint:

```text
client -> /api/moviesearch -> kinopoiskapiunofficial.tech
```

API-ключ хранится в переменной окружения `KINOPOISK_API_KEY`, поэтому он не попадает в клиентский бандл.

## Быстрый старт

1. Установите зависимости:

```bash
npm install
```

2. Создайте `.env.local` и добавьте ключ Kinopoisk API:

```env
KINOPOISK_API_KEY=your_api_key
```

3. Запустите проект:

```bash
npm run dev
```

4. Откройте локальный адрес, который покажет Vite.

## Скрипты

```bash
npm run dev       # запуск dev-сервера
npm run build     # production-сборка
npm run preview   # предпросмотр production-сборки
npm run lint      # проверка ESLint
npm run test      # запуск тестов
npm run test:ui   # запуск Vitest UI
```

