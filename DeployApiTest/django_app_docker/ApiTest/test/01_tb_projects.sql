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

 Date: 06/11/2019 17:34:11
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tb_projects
-- ----------------------------
DROP TABLE IF EXISTS `tb_projects`;
CREATE TABLE `tb_projects`  (
  `create_time` datetime(6) NOT NULL,
  `update_time` datetime(6) NOT NULL,
  `is_delete` tinyint(1) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `leader` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tester` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `programmer` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `publish_app` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `desc` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_projects
-- ----------------------------
INSERT INTO `tb_projects` VALUES ('2019-11-06 06:21:19.355242', '2019-11-06 06:43:13.957365', 0, 1, '自动化测试平台项目', '可可', '优优', '可优', '自动化测试平台应用', '该平台当前主要用于接口自动化测试.');
INSERT INTO `tb_projects` VALUES ('2019-11-06 06:22:54.349308', '2019-11-06 06:22:54.349308', 0, 2, '前程贷P2P金融项目', '可优', '小可可', '小优优', '前程贷P2P金融应用', '');
INSERT INTO `tb_projects` VALUES ('2019-11-06 06:24:43.988713', '2019-11-06 06:24:43.988713', 0, 3, '西天取经项目', '唐僧', '猪八戒', '孙悟空', '修成正果应用', '妖怪哪里跑?');
INSERT INTO `tb_projects` VALUES ('2019-11-06 06:27:33.708008', '2019-11-06 06:27:33.708008', 0, 4, '红楼梦项目', '曹雪芹', '贾宝玉', '王熙凤', '红楼梦研究应用', '如花美眷，怎敌似水流年。');
INSERT INTO `tb_projects` VALUES ('2019-11-06 06:28:54.269117', '2019-11-06 06:28:54.269117', 0, 5, '水浒传项目', '施耐庵', '宋江', '武松', '水浒传研究应用', '有缘千里来相会，无缘对面不相逢。');
INSERT INTO `tb_projects` VALUES ('2019-11-06 06:30:42.761183', '2019-11-06 06:30:42.762159', 0, 6, '三国演义项目', '吴承恩', '刘备', '关羽', '三国演义应用', '念刘备、关羽、张飞，虽然异姓，既结为兄弟，则同心协力，救困扶危；上报国家，下安黎庶。不求同年同月同日生，只愿同年同月同日死。皇天后土，实鉴此心，背义忘恩，天人共戮！');
INSERT INTO `tb_projects` VALUES ('2019-11-06 06:33:38.916130', '2019-11-06 06:33:38.916130', 0, 7, '金瓶梅项目', '兰陵笑笑生', '潘金莲', '西门庆', '金瓶梅研究项目', '富贵必因奸巧得，功名全仗邓通成。');
INSERT INTO `tb_projects` VALUES ('2019-11-06 06:41:12.372753', '2019-11-06 06:41:12.372753', 0, 8, '项目1', '某人', '某人', '某人', '某应用', '某某描述');
INSERT INTO `tb_projects` VALUES ('2019-11-06 06:42:00.168503', '2019-11-06 06:42:00.168503', 0, 9, '项目2', '某人', '某人', '某人', '某应用', '某某描述');
INSERT INTO `tb_projects` VALUES ('2019-11-06 06:42:19.643533', '2019-11-06 06:42:19.643533', 0, 10, '项目3', '某人', '某人', '某人', '某应用', '某某描述');
INSERT INTO `tb_projects` VALUES ('2019-11-06 06:42:40.066763', '2019-11-06 06:42:40.066763', 0, 11, '项目4', '某人', '某人', '某人', '某应用', '某某描述');
INSERT INTO `tb_projects` VALUES ('2019-11-06 07:23:44.150262', '2019-11-06 07:23:44.150262', 0, 12, '项目5', '某人', '某人', '某人', '某某应用', '');
INSERT INTO `tb_projects` VALUES ('2019-11-06 07:26:12.080008', '2019-11-06 07:26:12.080984', 0, 13, '项目6', '某人', '某人', '某人', '某应用', '');
INSERT INTO `tb_projects` VALUES ('2019-11-06 08:47:57.440296', '2019-11-06 08:47:57.440296', 0, 14, '这是一个跨时代的1049项目', '可优', '柠檬小姐姐', '优优', '国产大飞机C919研制应用', '此项目会提升民族自信心');
INSERT INTO `tb_projects` VALUES ('2019-11-06 09:05:50.807566', '2019-11-06 09:05:50.808542', 0, 15, '这是一个跨时代的3255项目', '可优', '可可', '优优', '国产大飞机C919研制应用', '此项目会提升民族自信心');
INSERT INTO `tb_projects` VALUES ('2019-11-06 09:11:56.984226', '2019-11-06 09:11:56.985201', 0, 16, '这是一个跨时代的7250项目', '可优', '可可', '优优', '国产大飞机C919研制应用', '此项目会提升民族自信心');
INSERT INTO `tb_projects` VALUES ('2019-11-06 09:13:34.347008', '2019-11-06 09:13:34.347008', 0, 17, '这是一个跨时代的347项目', '可优', '可可', '优优', '国产大飞机C919研制应用', '此项目会提升民族自信心');
INSERT INTO `tb_projects` VALUES ('2019-11-06 09:13:35.755099', '2019-11-06 09:13:35.756075', 0, 18, '这是一个跨时代的6982项目', '可优', '柠檬小姐姐', '优优', '国产大飞机C919研制应用', '此项目会提升民族自信心');

SET FOREIGN_KEY_CHECKS = 1;
