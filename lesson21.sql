-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 11 2023 г., 10:41
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `lesson21`
--
CREATE DATABASE IF NOT EXISTS `lesson21` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `lesson21`;

-- --------------------------------------------------------

--
-- Структура таблицы `catalog`
--

CREATE TABLE `catalog` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `catalog`
--

INSERT INTO `catalog` (`id`, `name`, `image`, `price`, `description`) VALUES
(1, 'чизкейк', 'чизкейк.jpg', 320, 'Приготовлен из смеси творога, яиц, сахара и ванильного экстракта на основе печенья. Это нежный и вкусный десерт, который может быть приправлен различными добавками, такими как фрукты или карамель. Чизкейк обладает гладкой текстурой и сладким вкусом'),
(2, 'медовик', 'медовик.jpeg', 350, 'Популярный и изысканный десерт, который состоит из нескольких слоев сливочного крема, пропитанных сладким и ароматным медом, вложенных между слоями из тонкой, хрустящей и легко приготавливающейся песочной основы, известной как карамельный корж'),
(3, 'красный бархат', 'красный бархат.jpeg', 400, 'Невероятно красивый и вкусный десерт, который порадует даже самых изысканных гурманов. Он отличается не только своим насыщенным красным цветом, но и нежным вкусом, который дополняется сливочным кремом'),
(4, 'павлова', 'павлова.jpg', 250, 'Нежнейшая меренга, которая плавится во рту, с кремом из взбитых сливок, который дарит богатый вкус и нежную текстуру. Сверху украшен свежими ягодами и фруктами, придающими блюду яркость, кислотность и фруктовость');

-- --------------------------------------------------------

--
-- Структура таблицы `feedback`
--

CREATE TABLE `feedback` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT '',
  `feedback` text NOT NULL,
  `catalogId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `feedback`
--

INSERT INTO `feedback` (`id`, `name`, `feedback`, `catalogId`) VALUES
(1, 'Мария', 'Очень вкусный чизкейк', 1),
(2, 'Саша', 'Мне понравилось!', 1),
(3, 'Кира', 'Такого вкусного медовика я давно не ела', 2),
(4, 'Сергей', 'Отличный десерт', 2),
(6, 'Галина', 'Осталась довольна от этого красного бархата', 3),
(7, 'Елена', 'Необычный десерт', 4),
(8, 'Инна ', 'Мой самый любимый десерт', 3),
(9, 'Федор', 'Понравился нашей семье', 3),
(10, 'Евгения', 'Безумно вкусный и в меру сладкий', 4),
(12, 'Анна ', 'Понравилась павлова', 4),
(13, 'Виктория', 'Класс', 1),
(14, 'Дмитрий', 'Хороший десерт', 1),
(15, 'Ника', 'Нежный медовик', 2),
(16, 'Олеся', 'Возьму его еще и не раз!', 3),
(17, 'Ирина', 'Достойный торт', 3),
(18, 'Алена ', 'Советую всем попробовать этот чизкейк', 1),
(19, 'Светлана', 'Суперский', 1),
(20, 'Ольга', 'Готова есть его хоть каждый день', 2);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `catalog`
--
ALTER TABLE `catalog`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `catalog`
--
ALTER TABLE `catalog`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
