# Используем образ Python с архитектурой amd64
FROM --platform=linux/amd64 python:3.12-slim

# Устанавливаем зависимости
WORKDIR /app

# Копируем pyproject.toml и poetry.lock
COPY pyproject.toml poetry.lock /app/

# Устанавливаем poetry
RUN pip install --no-cache-dir poetry

# Устанавливаем python-dotenv для загрузки переменных окружения
RUN pip install python-dotenv

# Устанавливаем зависимости проекта через poetry
RUN poetry install --without dev --no-interaction --no-ansi --no-root

# Копируем код приложения
COPY . /app/

# Копируем файл .env в контейнер
COPY .env /app/.env

# Открываем порт для FastAPI
EXPOSE 8080

# Запускаем приложение через uvicorn
CMD ["poetry", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]



