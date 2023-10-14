-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 13, 2023 at 01:44 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eleporidae`
--

-- --------------------------------------------------------

--
-- Table structure for table `adoption`
--

CREATE TABLE `adoption` (
  `id` int(11) NOT NULL,
  `rabbit_id` int(100) NOT NULL,
  `adoption_date` varchar(100) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` int(11) NOT NULL,
  `province` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `barangay` varchar(100) NOT NULL,
  `postal_code` int(50) NOT NULL,
  `reason_for_adoption` varchar(200) NOT NULL,
  `other_pets` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `adoption`
--

INSERT INTO `adoption` (`id`, `rabbit_id`, `adoption_date`, `fullname`, `email`, `phone`, `province`, `city`, `barangay`, `postal_code`, `reason_for_adoption`, `other_pets`) VALUES
(8, 0, '', 'Juan Dela Cruz', 'juandelacruz@gmail.com', 2147483647, 'Camarines Sur', 'Cabusao', 'Sta. Cruz', 4406, 'Want a pet', ''),
(9, 0, '', 'Juan Dela Cruz Jr', 'juan@gmail.com', 2147483647, 'Camarines Sur', 'Libmanan', 'Conception', 4407, 'Pet', 'N/A'),
(10, 0, '', 'Gerald Anderson', 'gerald@gmail.com', 2147483647, 'Camarines Sur', 'Libmanan', 'Sentro', 4407, 'Pet', 'none'),
(11, 3, '', 'aqwefaq', 'uyg@gmail.com', 7432453, 'Camarines Sur', 'asdf', 'sdfs', 444, 'df', 'sdf'),
(12, 8, '', 'dfvdf', 'ouihiuh@gmail.com', 32654, 'Camarines Sur', 'okjsd', 'rfgsdf', 3541, 'dfv', 'dfvb'),
(13, 10, '2', 'Jess', 'jess@gmail.com', 912, 'Camarines Sur', 'Cabs', 'Sta. Cruz', 4406, 'Pet din', 'dog'),
(14, 10, '2', 'tyhjg', 'gg@gmail.com', 2156564, 'Camarines Sur', 'szf', 'd', 4, 'jhk', 'ghk'),
(15, 1, '', 'Maria Magdalena', 'maria@gmail.com', 2147483647, 'Camarines Sur', 'Naga', 'Calaug', 4409, 'Meat', 'none'),
(16, 2, '2023-10-13', 'dfhsdfh', 'dfdsfh@gmail.com', 63, 'Camarines Sur', 'asdfa', 'sdf', 4587, 'frtgh', 'gtj');

-- --------------------------------------------------------

--
-- Table structure for table `breeding_pair`
--

CREATE TABLE `breeding_pair` (
  `id` int(11) NOT NULL,
  `buck_id` int(255) NOT NULL,
  `doe_id` int(255) NOT NULL,
  `pairing_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `breeding_pair`
--

INSERT INTO `breeding_pair` (`id`, `buck_id`, `doe_id`, `pairing_date`) VALUES
(1, 23, 52, '2023-10-17'),
(2, 2, 5, '2023-10-04');

-- --------------------------------------------------------

--
-- Table structure for table `rabbit`
--

CREATE TABLE `rabbit` (
  `id` int(11) NOT NULL,
  `image` blob NOT NULL,
  `name` varchar(20) NOT NULL,
  `age` int(10) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `weight` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rabbit`
--

INSERT INTO `rabbit` (`id`, `image`, `name`, `age`, `sex`, `weight`) VALUES
(1, '', 'Totoro', 2, 'female', 4),
(2, '', 'Loki', 11, 'male', 2),
(3, '', 'Gerald', 8, 'male', 2),
(5, '', 'Nomi', 6, 'female', 3),
(6, '', 'Snow', 9, 'female', 1),
(7, '', 'Harold', 8, 'male', 2),
(8, '', 'Jacob', 5, 'male', 1),
(67, '', 'Mikey', 14, 'female', 4);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES
(1, 'Ivan Bengcolado', 'ivan@gmail.com', 'ivan1234'),
(2, 'Francis Bawag', 'bawag@gmail.com', '12345678'),
(3, 'Cynthia Lorio', 'cynthia@gmail.com', '1234'),
(4, 'Aeriel', 'aeriel@gmail.com', '1234'),
(5, 'Josh', 'josh@gmail.com', 'josh123'),
(6, 'Jopay', 'jopay@gmail.com', 'jopay123'),
(7, 'Cris', 'cris@gmail.com', '0000'),
(8, 'Francis Paglinawan', 'paglinawan@gmail.com', '1111'),
(9, 'Cynthia', 'cynthia1@gmail.com', '0000'),
(10, 'Cynthia', 'cynthia1@gmail.com', '0000'),
(11, 'Ivan', 'ivan0@gmail.com', '0000'),
(12, 'Me', 'me@gmail.com', 'meme'),
(13, 'Ivaaann', 'ivan@gmail.com', '1234'),
(14, 'Ivvvan', 'ivan@gmail.com', '1234'),
(15, 'ivan', 'ivan@gmail.com', '12343'),
(16, 'Chloe', 'ivan1@gmail.com', '1234'),
(17, 'Ivan Bengcolado', 'ivan000@gmail.com', '1234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adoption`
--
ALTER TABLE `adoption`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `breeding_pair`
--
ALTER TABLE `breeding_pair`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rabbit`
--
ALTER TABLE `rabbit`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adoption`
--
ALTER TABLE `adoption`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `breeding_pair`
--
ALTER TABLE `breeding_pair`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `rabbit`
--
ALTER TABLE `rabbit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
