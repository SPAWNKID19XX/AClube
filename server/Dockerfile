FROM python:3.12-slim

# Чтобы логи не буферизовались и python не писал .pyc
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Системные зависимости (psycopg2, сборка некоторых пакетов)
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

# Копируем весь backend
COPY . /app

# Django обычно слушает 8000
EXPOSE 8000

# ВАЖНО: тут предполагается, что wsgi лежит в server/wsgi.py
# то есть модуль: server.wsgi:application
CMD ["gunicorn", "server.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "2", "--timeout", "120"]
