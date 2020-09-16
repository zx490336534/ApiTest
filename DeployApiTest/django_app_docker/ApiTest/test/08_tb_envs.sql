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

 Date: 06/11/2019 17:50:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tb_envs
-- ----------------------------
DROP TABLE IF EXISTS `tb_envs`;
CREATE TABLE `tb_envs`  (
  `create_time` datetime(6) NOT NULL,
  `update_time` datetime(6) NOT NULL,
  `is_delete` tinyint(1) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `base_url` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `desc` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_envs
-- ----------------------------
INSERT INTO `tb_envs` VALUES ('2019-11-06 06:44:22.840069', '2019-11-06 06:44:22.840069', 0, 1, '自动化测试平台环境', 'http://localhost:8000', '这是自动化测试平台环境变量');
INSERT INTO `tb_envs` VALUES ('2019-11-06 06:45:23.453569', '2019-11-06 06:45:23.453569', 0, 2, '前程贷P2P金融环境', 'http://api.lemonban.com/futureloan', '这是前程贷P2P金融环境变量');

SET FOREIGN_KEY_CHECKS = 1;
