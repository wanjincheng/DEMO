-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-03-31 10:34:04
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `login`
--

CREATE TABLE `login` (
  `name` char(12) CHARACTER SET utf8 NOT NULL,
  `id` int(100) NOT NULL,
  `password` char(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `login`
--

INSERT INTO `login` (`name`, `id`, `password`) VALUES
('185502580923', 1, 'JiKe18550580923');

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `newsid` int(25) NOT NULL,
  `newsimg` char(200) CHARACTER SET utf8 NOT NULL,
  `newsdate` date NOT NULL,
  `newstitle` char(200) CHARACTER SET utf8mb4 NOT NULL,
  `newssrc` char(200) CHARACTER SET utf8 NOT NULL,
  `newscla` char(20) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsid`, `newsimg`, `newsdate`, `newstitle`, `newssrc`, `newscla`) VALUES
(10, 'img/2.jpeg', '2016-10-12', '新闻标题', '极客学院', '精选'),
(13, 'img/3.JPEG', '2016-10-12', '新闻标题', '极客', '百家'),
(14, 'img/4.JPEG', '2016-10-12', '新闻标题', '极客', '百家'),
(15, 'img/4.JPEG', '2016-10-12', '新闻标题', '极客', '娱乐'),
(16, 'img/5.JPEG', '2016-10-12', '新闻标题', '极客', '娱乐'),
(17, 'img/5.JPEG', '2016-10-12', '新闻标题', '极客', '社会'),
(18, 'img/1.PNG', '2016-10-12', '新闻标题', '极客', '本地'),
(22, 'img/1.PNG', '2017-03-08', '的发生地方', '第三方是的飞', '精选'),
(27, 'img/1.PNG', '2017-03-22', 'sssssss', 'ssssssssssss', '精选'),
(29, 'img/1.PNG', '2017-03-14', 'sssssss', 'ssssssssssss', '百家'),
(41, 'img/1.PNG', '2017-03-15', '<img src>ss88888', 'sdfadsd', '百家');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `login`
--
ALTER TABLE `login`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `newsid` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
