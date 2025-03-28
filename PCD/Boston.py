import numpy as np
import pandas as pd
import matplotlib.pylab as plt
import seaborn as sns
import warnings
from scipy import stats
from scipy.stats import norm,skew
from sklearn.preprocessing import LabelEncoder
from scipy.special import boxcox1p
from sklearn.linear_model import Lasso
from sklearn.metrics import mean_squared_error

#导入数据集数据
#def data_load():
warnings.filterwarnings("ignore")
datafile=pd.read_csv('..\\boston_housing_data.csv')
#print(datafile)
print(datafile.shape)
print(datafile.columns)
print(datafile.head())
print(datafile.tail())

#散点图：犯罪率与房价
# color=sns.color_palette()
# sns.set_style('darkgrid')
# fig,ax=plt.subplots()
# ax.scatter(x=datafile['CRIM'],y=datafile['MEDV'])
# plt.ylabel('MEDV',fontsize=13)
# plt.xlabel('CRIM',fontsize=13)
# plt.show()

#删除异常值点
datafile_drop=datafile.drop(datafile[(datafile['CRIM']>4)&(datafile['MEDV']>40)].index)

#重新绘图
# fig,ax=plt.subplots()
# ax.scatter(datafile_drop['CRIM'],datafile_drop['MEDV'])
# plt.ylabel('MEDV',fontsize=13)
# plt.xlabel('CRIM',fontsize=13)
# plt.show()

#箱线图：用地比例与房价
# var='ZN'
# data=pd.concat([datafile_drop['MEDV'],datafile_drop[var]],axis=1)
# f,ax=plt.subplots(figsize=(8,6))
# fig=sns.boxplot(x=var,y="MEDV",data=data)
# fig.axis(ymin=0,ymax=50)
# plt.ylabel('MEDV',fontsize=13)
# plt.xlabel('ZN',fontsize=13)
# plt.show()

#热图变形
# plt.style.use('ggplot')#设置绘图风格
# sns.set_style('whitegrid')
# plt.subplots(figsize=(30,20))#设置画板尺寸
# mask=np.zeros_like(datafile_drop.corr(),dtype=np.bool)#为上三角矩阵生成掩码
# mask[np.triu_indices_from(mask)]=True
# sns.heatmap(datafile_drop.corr(),
#             cmap=sns.diverging_palette(20,220,n=200),
#             mask=mask,#数据显示在mask为False的单元格中
#             annot=True,#注入数据
#             center=0)#绘制有色数据时将色彩映射居中的值
# plt.show()

#热图
# k=203#关系矩阵中将显示203哥特征
# corrmat=datafile_drop.corr()
# cols=corrmat.nlargest(k,'MEDV')['MEDV'].index
# cm=np.corrcoef(datafile_drop[cols].values.T)
# fig,ax=plt.subplots(figsize=(30,20))
# sns.set(font_scale=1.25)
# hm=sns.heatmap(cm,
#                cbar=True,
#                annot=True,#注入数字
#                square=True,#单元格为正方形
#                fmt='.2f',#字符串格式代码
#                annot_kws={'size':9},#当annot为True时，ax.text的关键字参数，即注入数字的字体大小
#                yticklabels=cols.values,#列标签
#                xticklabels=cols.values#行标签
#                )
# plt.show()

#绘制散点图
# sns.set()
# cols=['MEDV','CRIM','ZN','INDUS']
# sns.pairplot(datafile_drop[cols],size=2.5)
# plt.show()
#
# sns.set()
# cols=['MEDV','CHAS','NOX','RM','AGE']
# sns.pairplot(datafile_drop[cols],size=2.5)
# plt.show()
#
# sns.set()
# cols=['MEDV','DIS','RAD']
# sns.pairplot(datafile_drop[cols],size=2.5)
# plt.show()
#
# sns.set()
# cols=['MEDV','TAX','PIRATIO','B','LSTAT']
# sns.pairplot(datafile_drop[cols],size=2.5)
# plt.show()


