# -*- coding:utf-8 -*-
"""
@Describe: timeoperator
@Author: zhongxin
@Time: 2019-11-08 23:25
@File: timeoperator.py
@Email: 490336534@qq.com
"""
import datetime


def change_time(timestr):
    """
    eg:'2019-11-06T06:44:22.840069Z'
       '2019-11-06 14:44:22'
    :param timestr:数据库获取到的时间
    :return:
    """
    c_time = datetime.datetime.strptime(timestr.split('.')[0], '%Y-%m-%dT%H:%M:%S') + datetime.timedelta(hours=8)
    return c_time.strftime('%Y-%m-%d %H:%M:%S')


if __name__ == '__main__':
    print(change_time('2019-11-06T06:44:22.840069Z'))
