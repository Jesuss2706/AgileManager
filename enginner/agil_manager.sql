-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 26, 2024 at 07:50 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agil_manager`
--

-- --------------------------------------------------------

--
-- Table structure for table `priority`
--

CREATE TABLE `priority` (
  `idPriority` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `priority`
--

INSERT INTO `priority` (`idPriority`, `name`) VALUES
(1, 'Low'),
(2, 'Medium'),
(3, 'High'),
(4, 'Urgent'),
(5, 'Critical'),
(6, 'Normal'),
(7, 'Important'),
(8, 'Optional'),
(9, 'Mandatory'),
(10, 'Immediate');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `idstatus` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`idstatus`, `name`) VALUES
(1, 'Not Started'),
(2, 'In Progress'),
(3, 'On Hold'),
(4, 'Completed'),
(5, 'Cancelled'),
(6, 'Pending Review'),
(7, 'Delayed'),
(8, 'Approved'),
(9, 'Rejected'),
(10, 'Archived');

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `idTask` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `user_creator` int(11) NOT NULL,
  `status_idstatus` int(11) NOT NULL,
  `Priority_idPriority` int(11) NOT NULL,
  `User_idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`idTask`, `name`, `description`, `start_date`, `end_date`, `user_creator`, `status_idstatus`, `Priority_idPriority`, `User_idUser`) VALUES
(1, 'Develop Login Page', 'Create user authentication system', '2023-06-01 09:00:00', '2023-06-10 17:00:00', 1, 2, 3, 1),
(2, 'Design Homepage', 'Create wireframes for homepage', '2023-06-05 10:00:00', '2023-06-15 16:00:00', 2, 1, 2, 2),
(3, 'Project Planning', 'Outline project milestones', '2023-06-02 11:00:00', '2023-06-07 15:00:00', 3, 4, 4, 3),
(4, 'Bug Testing', 'Identify and log bugs in the system', '2023-06-08 09:30:00', '2023-06-18 18:00:00', 4, 2, 3, 4),
(5, 'Data Analysis', 'Analyze user behavior data', '2023-06-10 13:00:00', '2023-06-20 17:00:00', 5, 1, 2, 5),
(6, 'API Integration', 'Integrate third-party API', '2023-06-12 10:00:00', '2023-06-22 16:00:00', 6, 2, 4, 1),
(7, 'UI Improvements', 'Enhance user interface design', '2023-06-15 09:00:00', '2023-06-25 17:00:00', 7, 1, 3, 2),
(8, 'Team Meeting', 'Conduct weekly team meeting', '2023-06-18 14:00:00', '2023-06-18 15:00:00', 8, 6, 1, 3),
(9, 'Security Audit', 'Perform security checks on the system', '2023-06-20 10:00:00', '2023-06-30 18:00:00', 9, 2, 5, 4),
(10, 'Performance Optimization', 'Optimize database queries', '2023-06-25 09:00:00', '2023-07-05 17:00:00', 10, 1, 3, 5);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `idUser` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `jobtitle` varchar(45) NOT NULL,
  `age` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`idUser`, `name`, `lastname`, `email`, `jobtitle`, `age`) VALUES
(1, 'John', 'Doe', 'john.doe@example.com', 'Developer', '30'),
(2, 'Jane', 'Smith', 'jane.smith@example.com', 'Designer', '28'),
(3, 'Mike', 'Johnson', 'mike.johnson@example.com', 'Manager', '35'),
(4, 'Emily', 'Brown', 'emily.brown@example.com', 'Tester', '26'),
(5, 'David', 'Wilson', 'david.wilson@example.com', 'Analyst', '32'),
(6, 'Sarah', 'Taylor', 'sarah.taylor@example.com', 'Developer', '29'),
(7, 'Chris', 'Anderson', 'chris.anderson@example.com', 'Designer', '31'),
(8, 'Lisa', 'Martinez', 'lisa.martinez@example.com', 'Manager', '38'),
(9, 'Tom', 'Garcia', 'tom.garcia@example.com', 'Tester', '27'),
(10, 'Amy', 'Lee', 'amy.lee@example.com', 'Analyst', '33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `priority`
--
ALTER TABLE `priority`
  ADD PRIMARY KEY (`idPriority`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`idstatus`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`idTask`,`user_creator`,`status_idstatus`,`Priority_idPriority`,`User_idUser`),
  ADD KEY `fk_Task_user_creator_idx` (`user_creator`),
  ADD KEY `fk_Task_status_idx` (`status_idstatus`),
  ADD KEY `fk_Task_Priority1_idx` (`Priority_idPriority`),
  ADD KEY `fk_Task_User1_idx` (`User_idUser`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `fk_Task_Priority1` FOREIGN KEY (`Priority_idPriority`) REFERENCES `priority` (`idPriority`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Task_User1` FOREIGN KEY (`User_idUser`) REFERENCES `user` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Task_status` FOREIGN KEY (`status_idstatus`) REFERENCES `status` (`idstatus`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Task_user_creator` FOREIGN KEY (`user_creator`) REFERENCES `user` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
