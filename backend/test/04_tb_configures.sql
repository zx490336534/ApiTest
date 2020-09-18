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

 Date: 06/11/2019 17:40:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tb_configures
-- ----------------------------
DROP TABLE IF EXISTS `tb_configures`;
CREATE TABLE `tb_configures`  (
  `create_time` datetime(6) NOT NULL,
  `update_time` datetime(6) NOT NULL,
  `is_delete` tinyint(1) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `author` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `request` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `interface_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `tb_configures_interface_id_435f6b40_fk_tb_interfaces_id`(`interface_id`) USING BTREE,
  CONSTRAINT `tb_configures_interface_id_435f6b40_fk_tb_interfaces_id` FOREIGN KEY (`interface_id`) REFERENCES `tb_interfaces` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_configures
-- ----------------------------
INSERT INTO `tb_configures` VALUES ('2019-11-06 06:56:04.961998', '2019-11-06 06:56:04.962972', 0, 1, '登录接口配置_自动化测试平台项目', '柠檬小姐姐', '{\"config\":{\"name\":\"登录接口配置_自动化测试平台项目\",\"request\":{\"headers\":{\"Accept\":\"application/json\",\"User-Agent\":\"Mozilla/5.0 KeYou\"}}}}', 1);
INSERT INTO `tb_configures` VALUES ('2019-11-06 09:24:05.413818', '2019-11-06 09:24:05.414794', 0, 2, '查询项目列表配置_前程贷项目', '柠檬小姐姐', '{\"config\":{\"name\":\"查询项目列表配置_前程贷项目\",\"request\":{\"headers\":{\"X-Lemonban-Media-Type\":\"lemonban.v1\",\"Accept\":\"application/json\"}}}}', 6);

SET FOREIGN_KEY_CHECKS = 1;
