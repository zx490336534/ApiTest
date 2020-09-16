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

 Date: 06/11/2019 17:39:17
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tb_interfaces
-- ----------------------------
DROP TABLE IF EXISTS `tb_interfaces`;
CREATE TABLE `tb_interfaces`  (
  `create_time` datetime(6) NOT NULL,
  `update_time` datetime(6) NOT NULL,
  `is_delete` tinyint(1) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tester` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `desc` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `project_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE,
  INDEX `tb_interfaces_project_id_99a838b0_fk_tb_projects_id`(`project_id`) USING BTREE,
  CONSTRAINT `tb_interfaces_project_id_99a838b0_fk_tb_projects_id` FOREIGN KEY (`project_id`) REFERENCES `tb_projects` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_interfaces
-- ----------------------------
INSERT INTO `tb_interfaces` VALUES ('2019-11-06 06:50:30.025310', '2019-11-06 06:50:30.025310', 0, 1, '登录接口_自动化测试平台项目', '可优', '登录接口', 1);
INSERT INTO `tb_interfaces` VALUES ('2019-11-06 06:51:00.343308', '2019-11-06 06:51:00.343308', 0, 2, '注册接口_自动化测试平台项目', '可可', '自动化测试平台项目, 注册接口', 1);
INSERT INTO `tb_interfaces` VALUES ('2019-11-06 06:51:45.881058', '2019-11-06 06:51:45.881058', 0, 3, '创建项目接口_自动化测试平台项目', '可优', '这是自动化测试平台创建项目接口', 1);
INSERT INTO `tb_interfaces` VALUES ('2019-11-06 06:52:22.481965', '2019-11-06 06:52:22.482943', 0, 4, '注册接口_前程贷P2P金融项目', '小可可', '', 2);
INSERT INTO `tb_interfaces` VALUES ('2019-11-06 06:52:40.250600', '2019-11-06 06:52:40.251577', 0, 5, '登录接口_前程贷P2P金融项目', '柠檬小姐姐', '', 2);
INSERT INTO `tb_interfaces` VALUES ('2019-11-06 09:22:50.634496', '2019-11-06 09:22:50.634496', 0, 6, '查看项目列表接口_前程贷P2P金融项目', '柠檬小姐姐', '', 2);

SET FOREIGN_KEY_CHECKS = 1;
