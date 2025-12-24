FROM php:8.4-apache

RUN apt-get update && apt-get install -y \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    curl \
    libzip-dev \
    && docker-php-ext-install pdo mbstring zip exif pcntl bcmath gd

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
COPY . .

RUN composer install --no-dev --optimize-autoloader

RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 775 storage bootstrap/cache database

# 🔥 FIX Apache MPM
RUN a2dismod mpm_event mpm_worker || true
RUN a2enmod mpm_prefork

EXPOSE 80
CMD ["apache2-foreground"]
