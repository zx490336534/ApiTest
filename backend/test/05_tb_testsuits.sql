/*
 Navicat Premium Data Transfer

 Source Server         : classes_loc
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : test2

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 06/11/2019 17:49:17
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tb_testsuits
-- ----------------------------
DROP TABLE IF EXISTS `tb_testsuits`;
CREATE TABLE `tb_testsuits`  (
  `create_time` datetime(6) NOT NULL,
  `update_time` datetime(6) NOT NULL,
  `is_delete` tinyint(1) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `include` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `project_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE,
  INDEX `tb_testsuits_project_id_d1139ab0_fk_tb_projects_id`(`project_id`) USING BTREE,
  CONSTRAINT `tb_testsuits_project_id_d1139ab0_fk_tb_projects_id` FOREIGN KEY (`project_id`) REFERENCES `tb_projects` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_testsuits
-- ----------------------------
INSERT INTO `tb_testsuits` VALUES ('2019-11-06 09:13:22.289937', '2019-11-06 09:13:22.289937', 0, 1, '套件1_自动化测试平台项目', '[1, 3]', 1);
INSERT INTO `tb_testsuits` VALUES ('2019-11-06 09:32:00.958971', '2019-11-06 09:32:00.958971', 0, 2, '套件2_前程贷项目', '[6]', 2);

SET FOREIGN_KEY_CHECKS = 1;
