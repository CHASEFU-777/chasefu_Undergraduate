from sklearn.linear_model import LinearRegression
from sklearn.datasets import load_boston
import pandas as pd
import matplotlib.pyplot as plt

# 加载数据集
boston=load_boston()
df=pd.DataFrame(boston.data,columns=boston.feature_names)
df['target']=boston.target
#查看数据项
features=df[boston.feature_names]
target=df['target']

#数据集划分
split_num=int(len(features)*0.5)
X_train=features[:split_num]
Y_train=target[:split_num]
X_test=features[split_num:]
Y_test=target[split_num:]
# print(X_train)
# print(X_test)
# print(Y_train)
# print(Y_test)
# print(type(X_train))
# print(type(X_test))
# print(type(Y_train))
# print(type(Y_test))
# 线性回归建模预测
clf_lin_reg=LinearRegression().fit(X_train,Y_train)
y_lin_reg_pred=clf_lin_reg.predict(X_test)

# print(y_lin_reg_pred)

# 可视化部分
plt.rcParams['font.sans-serif']='SimHei'
plt.rcParams['axes.unicode_minus']=False
plt.rc('font',size=14)
# plt.figure(figsize=(15,4))



plt.plot(list(range(0,len(X_test))),Y_test,marker='o')
plt.plot(list(range(0,len(X_test))),y_lin_reg_pred,marker='*')
plt.legend(['真实值','预测值'])
plt.title('Boston房价线性回归预测值与真实值的对比')
plt.show()


