import pandas as pd
import numpy as np
import seaborn as sns
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt
import warnings
import tkinter

def data_load():
    warnings.filterwarnings("ignore")
    df = pd.read_csv('..\\boston_housing_data.csv')
    # print(df)
    # print(df.shape)
    df.isnull().any()
    datafile = df.dropna()
    datafile_drop = datafile.drop(datafile[(datafile['CRIM'] > 4) & (datafile['MEDV'] > 40)].index)
    return datafile_drop

def CZI_MEDV():
    datafile=data_load()
    sns.set()
    cols=['MEDV','CRIM','ZN','INDUS']
    sns.pairplot(datafile[cols],size=2.5)
    plt.show()

def CNRA_MEDV():
    datafile = data_load()
    sns.set()
    cols=['MEDV','CHAS','NOX','RM','AGE']
    sns.pairplot(datafile[cols],size=2.5)
    plt.show()

def DRT_MEDV():
    datafile=data_load()
    sns.set()
    cols=['MEDV','DIS','RAD','TAX']
    sns.pairplot(datafile[cols],size=2.5)
    plt.show()

def PBL_MEDV():
    datafile=data_load()
    sns.set()
    cols=['MEDV','PIRATIO','B','LSTAT']
    sns.pairplot(datafile[cols],size=2.5)
    plt.show()

def HEAT():
    datafile=data_load()
    # 热力图
    k=203#关系矩阵中将显示203个特征
    corrmat=datafile.corr()
    cols=corrmat.nlargest(k,'MEDV')['MEDV'].index
    cm=np.corrcoef(datafile[cols].values.T)
    fig,ax=plt.subplots(figsize=(15,8))
    mask=np.zeros_like(datafile.corr(),dtype=np.bool)#为上三角矩阵生成掩码
    mask[np.triu_indices_from(mask)]=True
    sns.set(font_scale=1)
    hm=sns.heatmap(cm,
                   cbar=True,
                   annot=True,#注入数字
                   square=True,
                   fmt='.2f',
                   annot_kws={'size':9},#当annot为True时，ax.text的关键字参数，即注入数字的字体大小
                   mask=mask,
                   yticklabels=cols.values,
                   xticklabels=cols.values
                   )
    plt.show()

def PREDICT():
    datafile=data_load()
    data=datafile.drop(columns=['MEDV'])

    #划分训练集和测试集
    split_num=int(len(datafile)*0.5)
    X_train=data[:split_num]
    Y_train=datafile['MEDV'][:split_num]
    X_test=data[split_num:]
    Y_test=datafile['MEDV'][split_num:]

    # 线性回归建模预测
    clf_lin_reg=LinearRegression().fit(X_train,Y_train)
    y_lin_reg_pred=clf_lin_reg.predict(X_test)

    # 可视化部分
    plt.rcParams['font.sans-serif']='SimHei'
    plt.rcParams['axes.unicode_minus']=False
    plt.rc('font',size=14)
    plt.figure(figsize=(15,8))
    plt.scatter(list(range(0,len(X_test))),Y_test,color='steelblue')
    plt.scatter(list(range(0,len(X_test))),y_lin_reg_pred,color='tomato')
    plt.grid(alpha=0.2)
    plt.ylabel('MEDV')
    plt.legend(['真实值','预测值'])
    plt.title('Boston房价线性回归预测值与真实值的对比')
    plt.show()

win=tkinter.Tk()
win.geometry("270x180+1050+300")
win.title("Boston房价分析与预测")
win.attributes("-transparentcolor","white")
a=tkinter.Button(win,text="CRIM ZN INDUS~MEDV",height=1,command=CZI_MEDV)
b=tkinter.Button(win,text="CHAS NOX RM AGE~MEDV",height=1,command=CNRA_MEDV)
c=tkinter.Button(win,text="DIS RAD TAX~MEDV",height=1,command=DRT_MEDV)
d=tkinter.Button(win,text="PIRATIO B LSTAT~MEDV",height=1,command=PBL_MEDV)
tk=tkinter.Frame(win,width=200,height=3)
e=tkinter.Button(tk,text="heatmap",height=2,command=HEAT)
f=tkinter.Button(tk,text="Predict",height=2,command=PREDICT)

a.grid(column=0,row=0)
b.grid(column=0,row=1)
c.grid(column=0,row=2)
d.grid(column=0,row=3)
tk.grid(column=0,row=4)
e.grid(row=0,column=0)
f.grid(row=0,column=1)

win.mainloop()

